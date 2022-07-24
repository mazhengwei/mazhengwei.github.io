// head

module.exports = [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/gif/猫1.gif' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'blog' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
]