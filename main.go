package main

import (
	"fmt"
	"github.com/swallyu/ts"
	"net/http"
)

var fileServer = http.FileServer(http.Dir("./html"))

func ServeFiles(a *ts.App,ctx *ts.Context) {
	a.ServeFiles(fileServer,ctx)
}

func main() {
	app := ts.NewApp()
	app.Router().Post("/user", func(ctx *ts.Context) {
		fmt.Println(ctx.Req.Header.Get("Content-Type"))
		value := ctx.Form("name")
		fmt.Println("value is :" + value)

		postData := make(map[string]interface{})

		_ = ctx.BindJSON(&postData)

		data := make(map[string]interface{})
		data["code"] = 200
		data["msg"] = "messages"
		data["data"] = []string{"ss", "bb"}

		ctx.JSON(200, data)
	})
	app.Router().Get("/", func(ctx *ts.Context) {
		app.ServeFile(ctx,"./html/index.html")
	})
	app.Router().Get("/{file:.+}", func(ctx *ts.Context) {
		ServeFiles(app,ctx)
	})
	error := http.ListenAndServe(":8787", app)
	if error != nil {
		fmt.Println(error.Error())
	}
}
