<template>
    <div class="post-item">
        <div class="post-date-top" v-if="$themeConfig.topTime">
            <span>{{post.createDate.date}}</span>
        </div>
        <div class="post-dot"></div>

        <div class="post-title">
            <a :href="post.path" :title="post.title">{{post.title}}</a>
        </div>

        <div class="post-img" v-if="$themeConfig.cover">
            <a :href="getCover(post)">
                <img :src="getCover(post)" :alt="post.title" />
            </a>
        </div>

        <div class="post-cont">
            <div v-if="post.excerpt" v-html="post.excerpt"></div>
            <Content v-else />
        </div>

        <div class="square-button">
            <a :href="post.path" :title="post.title">查看更多</a>
        </div>

        <div class="post-meta">
            <a
                target="_blank"
                :href="$themeConfig.authorInfo.github"
                class="author"
                v-if="$themeConfig.authorInfo"
            >
                <img :src="$themeConfig.authorInfo.headerUrl" class="avatar" />
                {{$themeConfig.authorInfo.name}}
            </a>
            <span class="post-date-bottom">更新于：{{post.createDate.fromNow}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'post-item',
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    },
    components: {},
    methods: {
        isChinese(temp) {
            var re = /[^\u4e00-\u9fa5]/
            if (re.test(temp)) return false
            return true
        },
        getFontLen (str) {
            let len = 0;
            str.split('').forEach(k => {
                this.isChinese(k) ? len+= 2 : len++
            })
            return len
        },
        getCover(post) {
            const len = this.getFontLen(post.title)
            if (post.frontmatter.cover) return post.frontmatter.cover
            const  url = len > 13 ? `https://picsum.photos/500/300/?random&${new Date().getTime()}` : `https://fakeimg.pl/500x300/f1f1f1/9d9d9d/?retina=1&text=${post.title}&font=noto`
            return url
        }
    },

    created() {
        // console.log(this)
    }
}
</script>

<style lang="stylus">
.content
    .left
        &:hover
            .post-dot
                z-index 1000
.post-item
    width 100%
    margin-bottom 40px
    background-color #fff
    border solid 1px #f1f1f1
    padding 14px
    position relative
    &:hover
        box-shadow -7px 5px 10px 0px #6666663b
        .post-title
            a
                color #39aa56
        .post-dot
            border solid 3px #39aa56
    .post-date-top
        width 100%
        position absolute
        left 0
        top -12px
        text-align center
        span
            background-color #f1f1f1
            color #9d9d9d
            padding 0px 10px
            display inline-block
    &:after
        position absolute
        top 7px
        display block
        content ''
        width 0
        height 0
    &:before
        position absolute
        top 7px
        display block
        content ''
        width 0
        height 0
    .post-dot
        width 12px
        height 12px
        background-color #f1f1f1
        border solid 3px #60829f
        position absolute
        top 10px
        z-index 100
        border-radius 100%
.post-title
    margin-bottom 10px
    a
        font-size 18px
        color #666
        &:hover
            text-decoration underline
.post-img
    max-width 100%
    margin 0 0 5px
    img
        max-width 100%
.post-cont
    margin-bottom 20px
.post-meta
    display flex
    align-items center
    justify-content space-between
    .post-date-bottom
        font-size 14px
        color #666
    .author
        display flex
        align-items center
        font-size 14px
    .avatar
        width 28px
        height 28px
        margin-right 0.3em
        vertical-align middle
        border-radius 50%
        border 1px solid #f1f1f1
.square-button
    text-align right
    margin-bottom 10px
    a
        padding 0.3em 0.8em
        font-size 12px
        border-radius 2px
        background-color #deecdc
        color #39aa56
        font-weight 700
        text-transform uppercase
        border none
        cursor pointer
        transition color 170ms ease, border-color 200ms ease, stroke 200ms ease
        &:hover
            background-color #39aa56
            color #deecdc
</style>
