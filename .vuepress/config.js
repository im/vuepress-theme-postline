module.exports = {
    port: 9090,
    title: 'vuepress-theme-postline',
    description: '基于vuepres 主题',
    theme: 'postline',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        authorInfo: {
            headerUrl: 'https://avatars3.githubusercontent.com/u/12029165?s=460&v=4',
            name: '糖小米',
            github: 'https://github.com/im'
        },
        lastUpdated: true,
        search: {},
        category: {}
        // nav: [
        //     { text: 'Home', link: '/' },
        //     { text: 'Guide', link: '/guide/' },
        //     { text: 'External', link: 'https://google.com' },
        //     {
        //         text: 'Languages',
        //         items: [
        //             { text: 'Chinese', link: '/language/chinese' },
        //             { text: 'Japanese', link: '/language/japanese' }
        //         ]
        //     }
        // ],
        // sidebar: [
        //     {
        //         title: 'Group 1',
        //         collapsable: false,
        //         children: [
        //             '/'
        //         ]
        //     },
        //     {
        //         title: 'Group 2',
        //         children: ['/']
        //     }
        // ]
    },
};