(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{413:function(t,s,a){"use strict";a.r(s);var n=a(37),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-last-updated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-last-updated","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-last-updated",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-last-updated"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("last-updated 插件。")])]),t._v(" "),a("p",[t._v("如果你使用默认主题，你无需安装本插件，因为 VuePress 的 "),a("code",[t._v("core")]),t._v(" 中已经包含此插件，同时，你应该直接使用 "),a("router-link",{attrs:{to:"/post/theme/default-theme-config.html#最后更新时间"}},[t._v("themeConfig.lastUpdated")]),t._v(" 选项。")],1),t._v(" "),a("p",[t._v("如果你在你的自定义主题中使用该插件，你将需要自己在主题中完成 lastUpdated 的 UI，你可以使用 "),a("strong",[a("router-link",{attrs:{to:"/post/guide/global-computed.html#page"}},[t._v("$page.lastUpdated")])],1),t._v(" 去访问当前页面的时间字符串。")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/last-updated'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),a("h3",{attrs:{id:"transformer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transformer","aria-hidden":"true"}},[t._v("#")]),t._v(" transformer")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("(timestamp: number, lang: string) => string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("默认情况下，本插件为每个页面生成一个 13 位的时间戳，你可以传入一个 transformer 将其转换为你想要的任何格式。")]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/last-updated'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("transformer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不要忘了安装 moment")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          moment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("locale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromNow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("如果你在 "),a("router-link",{attrs:{to:"/post/guide/i18n.html"}},[t._v("i18n")]),t._v(" 模式下运行，你还可以使用第二个参数 "),a("code",[t._v("lang")]),t._v(" 为不同语言生成时间字符串。")],1),t._v(" "),a("p",[t._v("请注意，在 VuePress 中，我们遵循以下规范："),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Language_localisation",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C > Language tags in HTML and XML"),a("OutboundLink")],1),t._v("，因此 "),a("code",[t._v("zh-CN")]),t._v(" 使用连字符（"),a("code",[t._v("-")]),t._v("）而不是下划线（"),a("code",[t._v("_")]),t._v("）。 请确保你使用的库遵循此规范，否则请自行转换。")])])])},[],!1,null,null,null);s.default=e.exports}}]);