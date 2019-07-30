<template>
    <div class="home-main layout-inner" :class="{'show-welcome': isShowWelcome}">
       <TimeLine :pages="pages"></TimeLine>
       <Welcome :progress="100" @completed="completed"></Welcome>
    </div>
</template>

<script>
import TimeLine from '@theme/components/TimeLine.vue'
import Welcome from '@theme/components/Welcome.vue'
import { randomLoading } from '../util'
import moment from 'moment'
export default {
    name: 'home',
    components: {
        TimeLine,
        Welcome
    },

    data() {
        return {
            isShowWelcome: true
        }
    },

    computed: {
        pages () {
            return this.formatPages();
        }
    },

    mounted() {
    },

    methods: {
        completed () {},
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
    beforeDestroy () {
    },
    created () {
    }
}
</script>

<style lang="stylus">
.home-main
    padding-top 95px
    height 100%
    &.show-welcome
        overflow hidden
        position relative
</style>
