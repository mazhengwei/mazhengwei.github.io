// plugins
const baiduCode = require("./baiduCode"); // 百度统计hm码
const dayjs = require("dayjs");
module.exports = [
    [require('../plugins/love-me'), { // 鼠标点击爱心特效
        color: '#11a8cd', // 爱心颜色，默认随机色
        excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    }],

    ['fulltext-search'], // 全文搜索

    // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    //   thirdparty: [ // 可选，默认 []
    //     {
    //       title: '在GitHub中搜索',
    //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
    //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在npm中搜索',
    //       frontUrl: 'https://www.npmjs.com/search?q=',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q='
    //     }
    //   ]
    // }],

    [
        'vuepress-plugin-baidu-tongji', // 百度统计
        {
            hm: baiduCode || '01293bffa6c3962016c08ba685c79d78'
        }
    ],

    ['one-click-copy', { // 代码块复制按钮
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
        settings: {
            // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
            // cssLib: ['http://xxx'], // 在线示例中的css依赖
            // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
            jsfiddle: false, // 是否显示 jsfiddle 链接
            codepen: true, // 是否显示 codepen 链接
            horizontal: false // 是否展示为横向样式
        }
    }],
    [
        'vuepress-plugin-zooming', // 放大图片
        {
            selector: '.theme-vdoing-content img:not(.no-zoom)',
            options: {
                bgColor: 'rgba(0,0,0,0.6)'
            },
        },
    ],
    [
        '@vuepress/last-updated', // "上次更新"时间格式
        {
            transformer: (timestamp, lang) => {
                const dayjs = require('dayjs') // https://day.js.org/
                return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
            },
        }
    ],
    [
        'vuepress-plugin-comment',
        {
            choosen: 'gitalk',
            options: {
                clientID: '5a24e7e6b0bf8d22beee',  // 你的client ID
                clientSecret: 'ed8eb7416f5f73d3740c1c0a570c70163c6b0829',  // 你的client secret
                repo: 'mazhengwei.github.io', // GitHub 仓库
                owner: 'mazhengwei', // GitHub仓库所有者
                admin: ['mazhengwei'], // 对仓库有写权限的人
                // distractionFreeMode: true,
                pagerDirection: 'last', // 'first'正序 | 'last'倒序
                // 下面的不用修改，默认这些即可
                id: "<%- (window.location.origin + (frontmatter.to.path || window.location.pathname)).slice(-50) %>", //  页面的唯一标识,长度不能超过50
                title: "「评论」<%- document.title %>", // GitHub issue 的标题
                labels: ["Gitalk", "Comment"], // GitHub issue 的标签
                body:"<%- document.title %>：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
            }
        }
    ]

]

