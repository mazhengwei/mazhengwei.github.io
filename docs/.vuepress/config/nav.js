// nav
module.exports = [
    { text: '首页', link: '/' },
    { text: 'Go', link: '/go/', items: [
        { text: 'Go基础' },
        { text: '流程控制' },
        { text: '函数' },
        { text: '方法' },
    ]},
    { text: '云原生', link: '/cloudnative/', items: [
        { text: 'Kubernetes', link: '/kubernetes/' },
        { text: 'Etcd', link: '/etcd/' },
        { text: 'Docker', link: '/docker/'},
        { text: 'Thanos', link: '/thanos/'},
        { text: 'Prometheus', link: '/prometheus/'}
    ]},
    { text: '专题', link: '/topics/', items: [
        { text: '分布式监控', link: '/monitor/' },
    ]},
    { text: '前端', link: '/frontend/', items: [
        { text: '基础', items: [
            { text: 'Html', link: '/html/' },
            { text: 'CSS', link: '/css/' },
            { text: 'JavaScript', link: '/javascript/' }
        ]},
        { text: '框架', items: [
            { text: 'Vue', link: '/vue/' },
            { text: 'React', link: '/react/' }
        ]}
    ]},
    { text: '数据库', link: '/database/', items: [
        { text: 'SQL 数据库', items: [
        { text: 'MySQL', link: '/mysql/' }
        ]},
        { text: 'NoSQL 数据库', items: [
            { text: 'Redis', link: '/redis/' },
            { text: 'ElasticSearch', link: '/es/' },
            { text: 'MongoDB', link: '/mongodb/' },
        ]},
    ]},
    { text: '计算机基础', link: '/bases/', items: [
        { text: '数据结构', link: '/structure/'},
        { text: '算法', link: '/algorithm/'},
        { text: '设计模式', link: '/designs/'}
    ]},
    { text: '工具', link: '/tools/' },
        // {
        //     text: '指南', link: '/pages/a3d00f/', items: [
        //         { text: '主题初衷与诞生', link: '/pages/e693fc/' },
        //         { text: '介绍', link: '/pages/a3d00f/' },
        //         { text: '快速上手', link: '/pages/793dcb/' },
        //         { text: '目录结构', link: '/pages/2f674a/' },
        //         { text: '核心配置和约定', link: '/pages/33d574/' },
        //         { text: '自动生成front matter', link: '/pages/088c16/' },
        //         { text: 'Markdown 容器', link: '/pages/d0d7eb/' },
        //         { text: 'Markdown 中使用组件', link: '/pages/197691/' },
        //         {
        //             text: '相关文章', items: [
        //                 { text: '使目录栏支持h2~h6标题', link: '/pages/8dfab5/' },
        //                 { text: '如何让你的笔记更有表现力', link: '/pages/dd027d/' },
        //                 { text: '批量操作front matter工具', link: '/pages/2b8e22/' },
        //                 { text: '部署', link: '/pages/0fc1d2/' },
        //                 { text: '关于写文章和H1标题', link: '/pages/9ae0bd/' },
        //                 { text: '关于博客搭建与管理', link: '/pages/26997d/' },
        //                 { text: '在线编辑和新增文章的方法', link: '/pages/c5a54d/' },
        //             ]
        //         }
        //     ]
        // },
        // {
        //     text: '配置', link: '/pages/a20ce8/', items: [
        //         { text: '主题配置', link: '/pages/a20ce8/' },
        //         { text: '首页配置', link: '/pages/f14bdb/' },
        //         { text: 'front matter配置', link: '/pages/3216b0/' },
        //         { text: '目录页配置', link: '/pages/54651a/' },
        //         { text: '添加摘要', link: '/pages/1cc523/' },
        //         { text: '修改主题颜色和样式', link: '/pages/f51918/' },
        //         { text: '评论栏', link: '/pages/ce175c/' },
        //     ]
        // },
    {text: '索引',items: [
        {text: '分类', link: '/categories/'},
        {text: '标签', link: '/tags/'},
        {text: '归档', link: '/archives/'}
    ]}
]