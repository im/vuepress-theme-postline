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
        cover: true,
        gitalk: {
            clientID: '80e4875d4f5c8c0a5dda',
            clientSecret: '6515fc31a6efb26edd7342d08d409f709991c170',
            repo: 'vuepress-theme-postline',
            owner: 'im',
            admin: ['糖小米']// Faceboo
        },
        gitment: {
            oauth: {
                client_id: '80e4875d4f5c8c0a5dda',
                client_secret: '6515fc31a6efb26edd7342d08d409f709991c170',
            },
            repo: 'vuepress-theme-postline',
            owner: 'im'
        }
    },
};