module.exports = {
    port: 9090,
    base: '/vuepress-theme-postline/',
    title: 'vuepress-theme-postline',
    description: '基于vuepres 主题',
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