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
            this.$site.pages.forEach((page) => {
                page.createDate = this.getCreateDate(page);
                page.show = false
            })
            return this.$site.pages.sort((a, b) => {
                return b.createDate.timestamp - a.createDate.timestamp
            }).filter(v => !v.frontmatter.home)
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
    }
}
</script>

<style lang="stylus">
</style>
