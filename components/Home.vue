<template>
    <div class="home-main layout-inner" :class="{'show-welcome': isShowWelcome}">
       <TimeLine :pages="pages"></TimeLine>
       <Welcome :progress="progress" v-if="isShowWelcome" @completed="completed"></Welcome>
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
            isShowWelcome: true,
            loadImageIndex: 0,
            progress: 0,
            showTotal: 10
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
        completed () {
            this.isShowWelcome = false;
        },
        loadFirstImage () {
            this.pages.forEach((page, index) => {
                if (index < this.showTotal) {
                    let newImg = new Image()
                    newImg.src = page.frontmatter.cover
                    newImg.onload = () => {
                        this.loadImageIndex++
                        this.progress = +((this.loadImageIndex / this.showTotal) * 100).toFixed(2)
                    }
                }
            })
        },
        setCover (pages) {
            const coverMap = window.localStorage.getItem('coverMap') ? JSON.parse(window.localStorage.getItem('coverMap')) : {}
            pages.forEach((page, index) => {
                const key = page.key
                if (!page.frontmatter.cover) {
                    if (coverMap[key]) {
                        page.frontmatter.cover = coverMap[key];
                    } else {
                        page.frontmatter.cover = `https://picsum.photos/id/${index}/400/150/?${page.key}`
                    }
                    coverMap[key] = page.frontmatter.cover
                }
            })
            window.localStorage.setItem('coverMap', JSON.stringify(coverMap))
        },
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
            this.setCover(pages)
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
        this.loadFirstImage()
    }
}
</script>

<style lang="stylus">
.home-main
    padding-top 95px
    height 100%
    &.show-welcome
        max-width 100%
        overflow hidden
        position relative
</style>
