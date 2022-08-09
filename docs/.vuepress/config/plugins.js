// plugins
const baiduCode = require("./baiduCode"); // 百度统计hm码
const dayjs = require("dayjs");
module.exports = [
    [require('../plugins/love-me'), { // 鼠标点击爱心特效
        color: '#DC143C', // 爱心颜色，默认随机色#11a8cd
        excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    }],

    ['fulltext-search'], // 全文搜索
    // 自定义插件
    [
        {
            name: 'custom-plugins',
            globalUIComponents: ["PageInfo","BlockToggle"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
        }
    ],
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
            // 具体参数请看官网：https://valine.js.org/
            choosen: 'valine',
            // options 选项中的所有参数，会传给 Valine 的配置
            options: {
                el: '#valine-vuepress-comment',
                appId: 'L0K9wC2Q47RtflDcyd2Ws07s-gzGzoHsz',
                appKey: '32J3DVTqNA60JnnArEoNinBM',
                placeholder: '请留下你的足迹 ~~ 备注下昵称哦~~',
                // 有 URL、''、mp、identicon、monsterid、wavatar、retro、robohash、hide 头像选择，具体头像是什么样子，请访问 https://valine.js.org/avatar.html
                avatar: 'monsterid',	// 默认头像
                pageSize: 10,   // 评论列表分页，每页条数
                visitor: true,    // 文章访问量统计
                recordIP: false,   // 是否记录评论者 IP
                enableQQ: true,   // 是否启用昵称框自动获取 QQ 昵称和 QQ 头像, 默认关闭
            }
        }
    ],
    // [
    //     'vuepress-plugin-comment',
    //     {
    //         choosen: 'gitalk',
    //         options: {
    //             clientID: '5a24e7e6b0bf8d22beee',  // 你的client ID
    //             clientSecret: '1f9f1c35f82810a4735598830abb86f1577c3a42',  // 你的client secret
    //             repo: 'mazhengwei.github.io', // GitHub 仓库
    //             owner: 'mazhengwei', // GitHub仓库所有者
    //             admin: ['mazhengwei'], // 对仓库有写权限的人
    //             distractionFreeMode: false,
    //             pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //             // 下面的不用修改，默认这些即可
    //             id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
    //             title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
    //             labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
    //             body:
    //                 '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
    //         }
    //     }
    // ],

]

