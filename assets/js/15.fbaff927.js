(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{435:function(s,t,a){"use strict";a.r(t);var e=a(37),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 基本配置")]),s._v(" "),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),a("p",[s._v("如果没有任何配置，这个网站将会是非常局限的，用户也无法在你的网站上自由导航。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 "),a("code",[s._v(".vuepress")]),s._v(" 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("一个 VuePress 网站必要的配置文件是 "),a("code",[s._v(".vuepress/config.js")]),s._v("，它应该导出一个 JavaScript 对象：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello VuePress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Just playing around'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("对于上述的配置，如果你运行起 dev server，你应该能看到一个页面，它包含一个页头，里面包含一个标题和一个搜索框。VuePress 内置了基于 headers 的搜索 —— 它会自动为所有页面的标题、"),a("code",[s._v("h2")]),s._v(" 和 "),a("code",[s._v("h3")]),s._v(" 构建起一个简单的搜索索引。")]),s._v(" "),a("p",[s._v("参见 "),a("router-link",{attrs:{to:"/post/config/"}},[s._v("配置")]),s._v(" 来查看所有可配置的选项。")],1),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("其他配置格式")]),s._v(" "),a("p",[s._v("你也可以使用 YAML ("),a("code",[s._v(".vuepress/config.yml")]),s._v(") 或是 TOML ("),a("code",[s._v(".vuepress/config.toml")]),s._v(") 格式的配置文件。")])]),s._v(" "),a("h2",{attrs:{id:"主题配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 主题配置")]),s._v(" "),a("p",[s._v("一个 VuePress 主题应该负责整个网站的布局和交互细节。在 VuePress 中，目前自带了一个默认的主题（正是你现在所看到的），它是为技术文档而设计的。同时，默认主题提供了一些选项，让你可以去自定义导航栏（navbar）、 侧边栏（sidebar）和 首页（homepage） 等，详情请参见 "),a("router-link",{attrs:{to:"/post/theme/default-theme-config.html"}},[s._v("默认主题")]),s._v(" 。")],1),s._v(" "),a("p",[s._v("如果你想开发一个自定义主题，可以参考 "),a("router-link",{attrs:{to:"/post/theme/"}},[s._v("自定义主题")]),s._v("。")],1),s._v(" "),a("h2",{attrs:{id:"应用级别的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用级别的配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 应用级别的配置")]),s._v(" "),a("p",[s._v("由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 "),a("code",[s._v(".vuepress/enhanceApp.js")]),s._v(" 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。"),a("code",[s._v("enhanceApp.js")]),s._v(" 应该 "),a("code",[s._v("export default")]),s._v(" 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// VuePress 正在使用的 Vue 构造函数")]),s._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 附加到根实例的一些选项")]),s._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前应用的路由实例")]),s._v("\n  siteData "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 站点元数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...做一些其他的应用级别的优化")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("相关阅读：")])]),s._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/post/plugin/option-api.html#enhanceappfiles"}},[s._v("插件 API 中的 enhanceApp")])],1)])])},[],!1,null,null,null);t.default=n.exports}}]);