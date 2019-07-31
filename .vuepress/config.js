module.exports = {
    port: 9090,
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
    ],
    base: '/vuepress-theme-postline/',
    title: 'Postline',
    description: '基于vuepres 主题 vuepress-theme-postline',
    theme: 'postline',
    // permalink: "/:year/:month/:day/:slug",
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        authorInfo: {
            headerUrl: 'https://avatars3.githubusercontent.com/u/12029165?s=460&v=4',
            name: '糖小米',
            github: 'https://github.com/im'
        },
        topTime: false,
        lastUpdated: true,
        search: true,
        cover: true
    },
};