(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6edf407a"],{"261a":function(t,a,e){"use strict";var n=e("bb95"),l=e.n(n);l.a},bb95:function(t,a,e){},c254:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"unusual_info"},[e("div",{staticClass:"search_part"},[e("el-input",{attrs:{placeholder:"请输入企业名"},model:{value:t.filter.devName,callback:function(a){t.$set(t.filter,"devName",a)},expression:"filter.devName"}}),e("el-input",{attrs:{placeholder:"请输入设备ID"},model:{value:t.filter.name,callback:function(a){t.$set(t.filter,"name",a)},expression:"filter.name"}}),e("el-input",{attrs:{placeholder:"请输入地区"},model:{value:t.filter.area,callback:function(a){t.$set(t.filter,"area",a)},expression:"filter.area"}}),e("dict-select",{staticClass:"select_part",attrs:{mode:"unusualType",clearable:""},model:{value:t.filter.unusualType,callback:function(a){t.$set(t.filter,"unusualType",a)},expression:"filter.unusualType"}}),e("el-button",{attrs:{type:"primary",size:"small"}},[t._v("搜索")])],1),e("div",{staticClass:"table_part"},[t._m(0),e("data-table",{ref:"listTable",attrs:{fetch:t.fetch,heightBool:!0}},[e("data-table-column",{attrs:{column:"name",title:"设备ID",optional:"true",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.id))])]}}])}),e("data-table-column",{attrs:{column:"company",title:"所在企业",optional:"true",width:"210"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.company+"有限公司"))])]}}])}),e("data-table-column",{attrs:{column:"target",title:"出口浓度按需更换值",width:"150"}}),e("data-table-column",{attrs:{column:"lastChangeVal",title:"上次更换出口浓度值 ",width:"150",optional:"true"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.lastChangeVal))])]}}])}),e("data-table-column",{attrs:{column:"currentChangeVal",title:"当前更换出口浓度值 ",width:"150",optional:"true"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.currentChangeVal))])]}}])}),e("data-table-column",{attrs:{column:"concentGra",title:"浓度差 ",optional:"true"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.currentChangeVal-a.row.lastChangeVal==0?e("span",{staticClass:"del-btn"},[t._v("0")]):t._e(),a.row.currentChangeVal-a.row.lastChangeVal>0&&Number(a.row.currentChangeVal-a.row.lastChangeVal)<=10||Number(a.row.currentChangeVal-a.row.lastChangeVal)>=20?e("span",{staticClass:"warn-btn"},[t._v(t._s(a.row.currentChangeVal-a.row.lastChangeVal))]):t._e()]}}])}),e("data-table-column",{attrs:{column:"currentChangeVal",title:"浓度差参考值 ",width:"150",optional:"true"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v("10~20")])]}}])}),e("data-table-column",{attrs:{column:"changeCircle",title:"更换平均周期 (天)",width:"150"}}),e("data-table-column",{attrs:{column:"person",title:"维护人"}}),e("data-table-column",{attrs:{column:"phone",title:"电话号码",optional:"true",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(159+String(a.row.phone).substr(0,8)))])]}}])}),e("data-table-column",{attrs:{column:"unusual_status",title:"异常状态",optional:"true",width:"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.currentChangeVal-a.row.lastChangeVal>40?e("span",[t._v("出口超标/接近超标")]):t._e(),a.row.currentChangeVal-a.row.lastChangeVal>0&&a.row.currentChangeVal-a.row.lastChangeVal<=10||a.row.currentChangeVal-a.row.lastChangeVal>=20&&a.row.currentChangeVal-a.row.lastChangeVal<=40?e("span",[t._v("浓度过快下降/过久下降")]):t._e(),a.row.currentChangeVal-a.row.lastChangeVal==0?e("span",[t._v("可能掉线/传感器异常")]):t._e()]}}])}),e("data-table-column",{attrs:{fixed:"right",width:"150",column:"unusual_final",optional:"true",title:"异常结果"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.currentChangeVal-a.row.lastChangeVal>40?e("span",[e("el-tag",{staticStyle:{margin:"3px 0"},attrs:{type:"success",size:"mini"}},[t._v("超标异常")])],1):t._e(),a.row.currentChangeVal-a.row.lastChangeVal>0&&a.row.currentChangeVal-a.row.lastChangeVal<=10||a.row.currentChangeVal-a.row.lastChangeVal>=20&&a.row.currentChangeVal-a.row.lastChangeVal<=40?e("span",[e("el-tag",{staticStyle:{margin:"3px 0"},attrs:{type:"warning",size:"mini"}},[t._v("寿命异常")])],1):t._e(),a.row.currentChangeVal-a.row.lastChangeVal==0?e("span",[e("el-tag",{staticStyle:{margin:"3px 0"},attrs:{type:"danger",size:"mini"}},[t._v("设备异常")])],1):t._e()]}}])})],1)],1)])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"warm_tip"},[e("div",{staticClass:"fl tip_title"},[t._v("温馨提示:")]),e("div",{staticClass:"fl tip_content"},[e("p",[t._v("如果更换时浓度差较大或者较小，且在浓度差参考值之外时，为"),e("span",{staticStyle:{color:"#f56c6c"}},[t._v(" 超标异常")])]),e("p",[t._v("如果更换时发现当前浓度与上次比较下降过快，或者过久下降，为"),e("span",{staticStyle:{color:"#f56c6c"}},[t._v(" 寿命异常")])]),e("p",[t._v("如果更换时发现当前浓度与上次浓度一样，或者出现无传感数据，为"),e("span",{staticStyle:{color:"#f56c6c"}},[t._v(" 设备异常")])])])])}];function r(t){return $http({url:"/unusual_info/list",method:"get",params:t}).then(function(t){return t.data})}var s={data:function(){return{filter:{name:"",devName:"",area:"",unusualType:""},fetch:r}},methods:{}},o=s,u=(e("261a"),e("6691")),c=Object(u["a"])(o,n,l,!1,null,null,null);a["default"]=c.exports}}]);