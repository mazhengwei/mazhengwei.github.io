const nav = require('./nav.js')
const htmlModules = require("./htmlModules.js");

module.exports = {
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/gif/猫1.gif', // 导航栏logo
    repo: 'mazhengwei/mazhengwei.github.io', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    //updateBar: { // 最近更新栏
    //showToArticle: false, // 显示到文章页底部，默认true
    // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    //},
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    pageStyle: 'card', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // contentBgStyle: 1,

    //category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    //tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    //archive: true, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
        name: 'mazhengwei', // 必需
        href: 'https://github.com/mazhengwei' // 可选的
    },
    blogger: {
        avatar: "/img/gif/猫4.gif",
        name: "马正伟",
        slogan: "做有灵魂的搬砖人"
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
        // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
        icons: [
            // {
            //   iconClass: 'icon-youjian',
            //   title: '发邮件',
            //   link: 'mailto:894072666@qq.com'
            // },
            {
                iconClass: 'icon-github',
                title: 'GitHub',
                link: 'https://github.com/mazhengwei'
            },
            {
                iconClass: 'icon-erji',
                title: '听音乐',
                link: 'https://music.163.com/#/playlist?id=755597173'
            }
        ]
    },
    footer: { // 页脚信息
        createYear: 2022, // 博客创建年份
        copyrightInfo: 'mazhengwei', // 博客版权信息，支持a标签
    },
    htmlModules,
}