(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{375:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_1-非父子组件间的通信"}},[s._v("1. 非父子组件间的通信")]),t("ul",[t("li",[t("a",{attrs:{href:"#_1-1-代码"}},[s._v("1.1 代码")])]),t("li",[t("a",{attrs:{href:"#_1-2-详细说明"}},[s._v("1.2 详细说明")])])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"_1-非父子组件间的通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-非父子组件间的通信"}},[s._v("#")]),s._v(" 1. 非父子组件间的通信")]),s._v(" "),t("h3",{attrs:{id:"_1-1-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-代码"}},[s._v("#")]),s._v(" "),t("code",[s._v("1.1 代码")])]),s._v(" "),t("p",[s._v("需求：实现非关系组件之间的传值。点击"),t("code",[s._v("<child>")]),s._v(" 可以传值给 "),t("code",[s._v("<child-two>")]),s._v("，反之亦然。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOCTYPE")]),s._v(" html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html lang"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"en"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta charset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("非父子组件间传值")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Bus"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("总线"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("发布订阅模式"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("观察者模式"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./vue.js"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("child content"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ma"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("child"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("child content"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"muyan"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("child"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("child"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("two content"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mamuyan"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("child"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("two"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 给Vue的原型上挂载一个Vue实例")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bus "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n      Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'child'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("selfContent")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("content\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("props")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("content")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<div @click=\"handleClick\">{{selfContent}}</div>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("methods")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("handleClick")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发送事件，发送数据")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$emit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'change1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selfContent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("mounted")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 监听事件，获取数据")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'change2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selfContent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" msg\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("beforeDestroy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 清理事件监听")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$off")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'change2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'child-two'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("selfContent")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("content\n              "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("props")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("content")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<div @click=\"handleClick\">{{selfContent}}</div>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("methods")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("handleClick")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发送事件，发送数据")]),s._v("\n                  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$emit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'change2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selfContent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("mounted")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 监听事件，获取数据")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'change1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selfContent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" msg\n              "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("beforeDestroy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 清理事件监听")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$off")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'change1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      vm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("el")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#app"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br")])]),t("h3",{attrs:{id:"_1-2-详细说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-详细说明"}},[s._v("#")]),s._v(" "),t("code",[s._v("1.2 详细说明")])]),s._v(" "),t("p",[s._v("Vue中非父子组件之间通信除了用"),t("code",[s._v("vuex")]),s._v("，也可以通过"),t("code",[s._v("bus总线")]),s._v("，两者适用场景不同。"),t("code",[s._v("vuex")]),s._v("这里先不做过多描述。")]),s._v(" "),t("ul",[t("li",[s._v("可以通过"),t("code",[s._v("bus总线")]),s._v("实现非父子组件之间的通信，"),t("code",[s._v("bus")]),s._v(" 比较适合小项目。")]),s._v(" "),t("li",[t("code",[s._v("bus")]),s._v("其实就是利用"),t("code",[s._v("vue的自定义事件机制")]),s._v("，在触发地方通过"),t("code",[s._v("$emit")]),s._v("向外发布一个事件,在需要监听的页面，通过"),t("code",[s._v("$on")]),s._v("监听事件("),t("code",[s._v("监听的方法一般写在mounted里面")]),s._v(")。")]),s._v(" "),t("li",[t("code",[s._v("vuex")]),s._v(" 适用中大型项目、数据在多组件之间公用的情况。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);