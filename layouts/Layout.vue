<template>
    <div class="theme-container postline">
        <TopBar></TopBar>

        <TimeLine v-if="isHome" :pages="pages"></TimeLine>
        <Page v-else></Page>
    </div>
</template>

<script>
import moment from 'moment'
import TopBar from '@theme/components/TopBar.vue'
import TimeLine from '@theme/components/TimeLine.vue'
import Page from '@theme/components/Page.vue'
export default {
    components: { 
        TopBar,
        TimeLine,
        Page
    },

    data() {
        return {
        }
    },

    computed: {
        isHome () {
            return this.$page.frontmatter.home;
        },
        pages () {
            return this.formatPages();
        }
    },

    mounted() {
        
    },

    methods: {
        formatPages () {
            const pageMap = {}
            this.$site.pages.forEach((page) => {
                if (page.frontmatter.home) return;
                const createDate = this.getCreateDate(page);
                const year = createDate.year.toString()
                const month = createDate.month.toString()
                if (pageMap[year + month]) {
                    pageMap[year + month].push(page)
                } else {
                    pageMap[year + month] = []
                    pageMap[year + month].push(page)
                }
                page.createDate = createDate;
            })
            return this.sortPages(pageMap);
        },
        sortPages (pageMap, key) {
            let pages = []
            const sortArr = Object.keys(pageMap).sort(this.sortNumber);
            sortArr.forEach(yearMonth => {
                let yearMonthPages = pageMap[yearMonth];
                yearMonthPages = yearMonthPages.sort((a, b) => {
                    return b.createDate.timestamp - a.createDate.timestamp
                })
                pages.push({
                    pages: yearMonthPages,
                    date: yearMonth.slice(0, 4) + '-' + yearMonth.slice(4, 6),
                    year: yearMonth.slice(0, 4),
                    month: yearMonth.slice(4, 6)
                })  
            })
            return pages;
        },
        sortNumber (a, b) {
            return b - a
        },
        getCreateDate (page) {
            const createDate = page.frontmatter.createDate
            if (createDate) {
                const dateObj = {
                    date: moment(createDate).format('YYYY-MM-DD'),
                    year: moment(createDate).format('YYYY'),
                    month: moment(createDate).format('MM'),
                    day:  moment(createDate).format('DD'),
                    timestamp: new Date(moment(createDate).format('YYYY-MM-DD')).getTime(),
                    fromNow: moment(createDate).fromNow()
                }
                return dateObj;
            }
            if (page.lastUpdated) {
                return page.lastUpdated;
            }
            return {
                date: moment(createDate).format('YYYY-MM-DD'),
                year: moment().format('YYYY'),
                month: moment().format('MM'),
                day:  moment().format('DD'),
                timestamp: new Date().getTime(),
                fromNow: moment().fromNow()
            }
        }
    },
    created () {
        console.log(this)
    }
}
</script>

<style lang="stylus">
</style>
