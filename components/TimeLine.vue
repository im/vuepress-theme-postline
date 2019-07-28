<template>
    <div class="layout-inner time-line-box" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="time-line-main">
            <div class="timeline-bar"></div>
            <PostBox :pages="pages"></PostBox>
        </div>
        <div class="loading" v-if="loading">
            <Loading></Loading>
        </div>
    </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll'
import PostBox from '@theme/components/PostBox.vue'
import Loading from '@theme/components/Loading.vue'
export default {
    name: 'time-line',
    directives: {
        infiniteScroll
    },
    props: {
        pages: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            copyPages: [],
            loadPages: [],
            busy: false,
            isDefaultLoad: true,
            loading: false
        }
    },

    components: {
        PostBox,
        Loading
    },
    mounted() {
    },

    methods: {
        loadMore () {
            if (this.isDefaultLoad) return this.isDefaultLoad = false
            this.setPagesShow(5)
        },
        setPagesShow(num) {
            this.loading = true
            let pageShowIndex = this.copyPages.filter(v => v.show).length;
            this.copyPages.forEach((page, index) => {
                if (index < (pageShowIndex + num)) {
                    this.$set(page, 'show', true)
                }
            });
            this.pages.splice(0, this.pages.length)
            this.copyPages.forEach(page => {
                this.pages.push(page)
            })
            if (pageShowIndex === this.copyPages.length) {
                this.busy = true
                this.loading = false
            }
        }
    },

    created() {
        this.copyPages = [...this.pages]
        this.setPagesShow(10)
    }
}
</script>

<style lang="stylus">
.time-line-box.layout-inner
    padding-top 95px
    .loading
        height 90px
        text-align center
    .time-line-main
        position relative
    .timeline-bar
        background-color #f1f1f1
        width 6px
        height 100%
        margin-left -3px
        position absolute
        left 50%
        top 0
        border-radius 20em
        z-index -1
        box-shadow inset 0 0 1px 0 rgba(0, 0, 0, 0.5), 0 0 1px 0 rgba(255, 255, 255, 0.6)
</style>
