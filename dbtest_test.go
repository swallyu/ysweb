package main

import (
	"database/sql"
	"fmt"
	"reflect"
	"testing"
)

import _ "github.com/go-sql-driver/mysql"

type AdminUser struct {
	Id        int    `org:"id"`
	LoginName string `orm:"login_name"`
}

func Test_DbHelper(t *testing.T) {

	source := "bomas:bomas123@tcp(gz-cdb-f70114ox.sql.tencentcdb.com:62353)/e2es-service"

	db, err := sql.Open("mysql", source)

	if err != nil {
		fmt.Println(err)
	}
	var user []AdminUser

	QueryList(db, &user, "select id,login_name LoginName from admin_user ")
	//data, err := QuerForMap(db, "select id,login_name LoginName from admin_user ")
	//for v := range data {
	//	fmt.Println(json.Marshal(v))
	//}

	fmt.Println(len(user))
}

func QueryList(db *sql.DB,m interface{}, sqlInfo string, args ...interface{})  {
	rows, err := db.Query(sqlInfo, args...)

	if err != nil {
		fmt.Println("sql open error ", err)
	}
	defer rows.Close()

	//columns, _ := rows.Columns()
	//values := make([]interface{}, len(columns))
	//reflectStruct := reflect.ValueOf(m).Elem()
	reflectType := reflect.TypeOf(m)

	if reflectType.Kind() == reflect.Ptr {
		reflectType = reflectType.Elem()
	}

	for i := 0; i < reflectType.NumField(); i++ {
		field := reflectType.Field(i)
		mapName := field.Tag.Get("orm")
		if len(mapName) == 0 {
			mapName = field.Name
		}
		fmt.Println(mapName)
	}
	//for i, v := range columns {
	//	_, ret := reflectType.FieldByName(v)
	//	if ret {
	//		value := reflectStruct.FieldByName(v)
	//		values[i] = value.Addr().Interface()
	//	} else {
	//		var tmp = sql.RawBytes{}
	//		values[i] = &tmp
	//	}
	//}
	//for rows.Next() {
	//	err := rows.Scan(values...)
	//	if err != nil {
	//		fmt.Println(err)
	//	}
	//	break
	//}
}

func QueryObj(db *sql.DB, m interface{}, sqlInfo string, args ...interface{}) {
	rows, err := db.Query(sqlInfo, args...)

	if err != nil {
		fmt.Println("sql open error ", err)
	}
	defer rows.Close()

	columns, _ := rows.Columns()
	values := make([]interface{}, len(columns))
	reflectStruct := reflect.ValueOf(m).Elem()
	reflectType := reflect.TypeOf(m)

	if reflectType.Kind() == reflect.Ptr {
		reflectType = reflectType.Elem()
	}

	for i := 0; i < reflectType.NumField(); i++ {
		field := reflectType.Field(i)
		mapName := field.Tag.Get("orm")
		if len(mapName) == 0 {
			mapName = field.Name
		}
		fmt.Println(mapName)
	}
	for i, v := range columns {
		_, ret := reflectType.FieldByName(v)
		if ret {
			value := reflectStruct.FieldByName(v)
			values[i] = value.Addr().Interface()
		} else {
			var tmp = sql.RawBytes{}
			values[i] = &tmp
		}
	}
	for rows.Next() {
		err := rows.Scan(values...)
		if err != nil {
			fmt.Println(err)
		}
		break
	}
}

func QuerForMap(db *sql.DB, sqlInfo string, args ...interface{}) ([]map[string]interface{}, error) {
	rows, err := db.Query(sqlInfo, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	columns, _ := rows.Columns()
	columnLength := len(columns)

	values := make([]sql.RawBytes, len(columns))
	cache := make([]interface{}, columnLength) //临时存储每行数据
	for index, _ := range cache { //为每一列初始化一个指针
		cache[index] = &values[index]
	}
	var list []map[string]interface{} //返回的切片
	for rows.Next() {
		_ = rows.Scan(cache...)

		item := make(map[string]interface{})
		for i, data := range cache {
			item[columns[i]] = data //取实际类型
		}
		fmt.Println(item["id"])
		list = append(list, item)
	}
	return list, nil
}
