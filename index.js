module.exports = (options, ctx) => ({
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale(lang)
                    return {
                        date: moment(timestamp).format('YYYY-MM-DD'),
                        year: moment(timestamp).format('YYYY'),
                        month: moment(timestamp).format('MM'),
                        day:  moment(timestamp).format('DD'),
                        timestamp: timestamp,
                        fromNow: moment(timestamp).fromNow()
                    }
                }
            }
        ],
        '@vuepress/search',
        '@vuepress/plugin-nprogress',
        ['container', {
            type: 'tip',
            defaultTitle: {
                '/zh/': '提示'
            }
        }],
        ['container', {
            type: 'warning',
            defaultTitle: {
                '/zh/': '注意'
            }
        }],
        ['container', {
            type: 'danger',
            defaultTitle: {
                '/zh/': '警告'
            }
        }]
    ]
})
