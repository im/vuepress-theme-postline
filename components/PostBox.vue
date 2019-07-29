<template>
    <div class="post-box">
        <div class="content">
            <div class="left" ref="left">
                <PostItem v-for="(post, index) in leftPages" :post="post"></PostItem>
            </div>
            <div class="right" ref="right">
                <PostItem v-for="(post, index) in rightPages" :post="post"></PostItem>
            </div>
        </div>
    </div>
</template>

<script>
import PostItem from '@theme/components/PostItem.vue'
export default {
    name: 'PostBox',
    props: {
        pages : {
            type: Array,
            'default': () => []
        }
    },
    data() {
        return {
            leftPages: [],
            rightPages: [],
            index: 0
        }
    },
    components: {
        PostItem
    },
    mounted() {
        this.updateWaterfall()
        this.polling()
    },
    methods: {
        polling () {
            this.$nextTick(() => {
                this.index++
                if (this.index < 10){
                    this.polling()
                } else {
                    this.loadImage()
                }
            })
        },
        getCover(post) {
            if (post.frontmatter.cover) return post.frontmatter.cover
            post.frontmatter.cover = `https://picsum.photos/400/150/?random&${post.key}`
            return `https://picsum.photos/400/150/?random&${post.key}`
        },
        loadImage () {
            const pages = this.leftPages.concat(this.rightPages)
            const len = pages.length
            let index = 0;
            pages.forEach(post => {
                const src = this.getCover(post)
                let newImg = new Image()
                newImg.src = src
                newImg.onload = () => {
                    index++
                    if (index === len) {
                        this.$bus.$emit('loaded')
                    }
                }
            });
        },
        updateWaterfall() {
            const leftHeight = this.$refs.left.clientHeight
            const rightHeight = this.$refs.right.clientHeight
            let post = this.pages.shift()
            if (!post) {
                return
            }
            if (leftHeight <= rightHeight) {
                this.leftPages.push(post)
            } else {
                this.rightPages.push(post)
            }
            this.$nextTick(function() {
                this.updateWaterfall()
            })
        }
    }
}
</script>
<style lang="stylus">
.post-box
    width 100%
    .title
        text-align center
        margin-bottom 20px
        span
            padding 8px 20px
            background-color #f1f1f1
            color #9d9d9d
            display inline-block
    .content
        // height 10000px
        width 100%
        display flex
        justify-content space-between
        align-items flex-start
        .left, .right
            width calc(50% - 40px)
        .left
            .post-item
                &:after
                    right -6px
                    border-top:8px solid transparent;
                    border-bottom:8px solid transparent;
                    border-left:8px solid #fff;
                &:before
                    right -8px
                    border-top:8px solid transparent;
                    border-bottom:8px solid transparent;
                    border-left:8px solid #f1f1f1;
            .post-dot
                right: -47px;
        .right
            padding-top 30px
            .post-item
                &:after
                    left -6px
                    border-top:8px solid transparent;
                    border-bottom:8px solid transparent;
                    border-right:8px solid #fff;
                &:before
                    left -8px
                    border-top:8px solid transparent;
                    border-bottom:8px solid transparent;
                    border-right:8px solid #f1f1f1;
            .post-dot
                left: -47px;
</style>
