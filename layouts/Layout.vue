<template>
    <div class="theme-container postline" :class="{over: loading}">
        <TopBar></TopBar>
        <div class="postline-loading" v-if="loading">
            <Loading ref="loading" :type="getLoadingType()"></Loading>
        </div>
        <TimeLine v-if="isHome" :pages="pages"></TimeLine>
        <Page v-else></Page>
    </div>
</template>

<script>
import moment from 'moment'
import Loading from '@theme/components/Loading.vue'
import { randomLoading } from '../util'
import TopBar from '@theme/components/TopBar.vue'
import TimeLine from '@theme/components/TimeLine.vue'
import Page from '@theme/components/Page.vue'
export default {
    components: { 
        TopBar,
        TimeLine,
        Page,
        Loading
    },

    data() {
        return {
            loading: true
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
        getLoadingType () {
            return randomLoading()
        },
        formatPages () {
            this.$site.pages.forEach((page) => {
                page.createDate = this.getCreateDate(page);
            })
            const pages = this.$site.pages.sort((a, b) => {
                return b.createDate.timestamp - a.createDate.timestamp
            }).filter(v => !v.frontmatter.home)
            return pages
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
    mounted () {
        this.$bus.$on('loaded', () => {
            this.loading = false
        })
    },
    beforeDestroy () {
        this.$bus.$off('loaded')
    },
    created () {
    }
}
</script>

<style lang="stylus">
#app
   width 100%
   height 100% 
.postline
    width 100%
    height 100%
    position relative
    &.over
        overflow hidden
    .postline-loading
        width 100%
        height 100%
        padding-top 60px
        display flex
        align-items center
        justify-content center
</style>
