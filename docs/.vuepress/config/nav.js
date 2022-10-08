// nav
module.exports = [
    { text: '首页', link: '/' },
    { text: 'Go', link: '/go/', items: [
        { text: 'Go基础' , link: '/go/base/'},
        { text: '流程控制' , link: '/go/control/'},
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
        { text: 'Vue框架学习', link: '/vue/' },
    ]},
    // { text: '数据库', link: '/database/', items: [
    //     { text: 'SQL 数据库', items: [
    //     { text: 'MySQL', link: '/mysql/' }
    //     ]},
    //     { text: 'NoSQL 数据库', items: [
    //         { text: 'Redis', link: '/redis/' },
    //         { text: 'ElasticSearch', link: '/es/' },
    //         { text: 'MongoDB', link: '/mongodb/' },
    //     ]},
    // ]},
    { text: '计算机基础', link: '/bases/', items: [
        { text: '数据结构', link: '/structure/'},
        { text: '算法', link: '/algorithm/'},
        { text: '设计模式', link: '/designs/'}
    ]},
    { text: '工具', link: '/tools/' },
    {text: '索引',items: [
        {text: '分类', link: '/categories/'},
        {text: '标签', link: '/tags/'},
        {text: '归档', link: '/archives/'}
    ]}
]