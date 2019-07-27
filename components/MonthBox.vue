<template>
    <div class="month-box">
        <div class="title">
            <span>{{monthPage.date}}</span>
        </div>
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
    name: 'MonthBox',
    props: {
        monthPage : {
            type: Object,
            'default': () => {}
        }
    },
    data() {
        return {
            data: [
            ],
            leftPages: [],
            rightPages: []
        }
    },
    components: {
        PostItem
    },
    mounted() {
        this.updateWaterfall()
    },
    methods: {
        updateWaterfall() {
            const leftHeight = this.$refs.left.clientHeight
            const rightHeight = this.$refs.right.clientHeight
            let post = this.monthPage.pages.shift()
            if (post == null) {
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
    },
    created() {}
}
</script>
<style lang="stylus">
.month-box
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
