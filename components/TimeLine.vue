<template>
    <ClientOnly>
        <div class="time-line-box" ref="timeLineBox">
            <div class="time-line-main">
                <div class="timeline-bar"></div>
                <PostBox :pages="loadPages" ref="postBox"></PostBox>
            </div>
            <div class="loading" v-if="loading">
                <Loading :type="loadingType"></Loading>
            </div>
        </div>
    </ClientOnly>
</template>

<script>
import { randomLoading } from '../util'
import PostBox from '@theme/components/PostBox.vue'
import Loading from '@theme/components/Loading.vue'
export default {
    name: 'time-line',
    props: {
        pages: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            loadPages: [],
            isDefaultLoad: false,
            loading: false,
            loadingType: ''
        }
    },
    components: {
        PostBox,
        Loading
    },
    mounted() {
        const vnode = {
            context: this
        }
        const binding = {
            value: this.loadMore
        }
        import('../directive/infinite-scroll/index.js').then(module => {
            this.$nextTick(() => {
                module.default(this.$refs.timeLineBox, binding, vnode)
            })
        })
    },

    methods: {
        getLoadingType () {
            this.loadingType = randomLoading()
        },
        loadMore() {
            if (this.isDefaultLoad) return (this.isDefaultLoad = false)
            this.setPagesShow(5)
        },
        setPagesShow(num) {
            this.getLoadingType()
            this.loading = true
            if (!this.pages.length) {
                this.loading = false
                return
            }
            this.loadPages.splice(0, this.loadPages.length)
            this.pages.splice(0, num).forEach(page => {
                this.loadPages.push(page)
            })
            if (!this.isDefaultLoad) {
                this.$refs.postBox.updateWaterfall()
            }
            this.isDefaultLoad = false
        }
    },

    created() {
        this.isDefaultLoad = true
        this.setPagesShow(10)
    }
}
</script>

<style lang="stylus">
.time-line-box
    .loading
        height 120px
        display: flex;
        justify-content: center;
        align-items: center;
    .time-line-main
        position relative
        padding-top 30px
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
