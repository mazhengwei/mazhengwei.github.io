// head

module.exports = [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/gif/猫1.gif' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'blog' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // chrome 85版本，为保护用户隐私，默认Referrer Policy 变成了strict-origin-when-cross-origin
    // 添加meta，解决文章统计访问量数据不准确问题
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }] // 阿里在线矢量图
]