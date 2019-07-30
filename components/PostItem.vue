<template>
    <div class="post-item">
        <div class="post-date-top" v-if="$themeConfig.topTime">
            <span>{{post.createDate.date}}</span>
        </div>
        <div class="post-dot"></div>

        <div class="post-title">
            <a :href="getPostPath(post.path)" :title="post.title">
                {{post.title}}
                <span class="date">{{post.createDate.date}}</span>
            </a>
        </div>

        <div class="post-img" v-if="$themeConfig.cover && !isMobile()">
            <div class="img-loading">
                <Loading ref="loading" :type="getLoadingType()"></Loading>
            </div>
            <a :href="getPostPath(post.path)" class="img-link">
                <img class="zoom-custom-imgs" src="/" v-loadImg :loadSrc="post.frontmatter.cover" :alt="post.title" />
            </a>
        </div>

        <div class="post-cont">
            <div v-if="post.excerpt" v-html="post.excerpt"></div>
            <!-- <Content v-else /> -->
        </div>

        <div class="square-button">
            <a :href="getPostPath(post.path)" :title="post.title">查看更多</a>
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
import Loading from '@theme/components/Loading.vue'
import { randomLoading } from '../util'
export default {
    name: 'post-item',
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    },
    directives: {
        loadImg (el, binding, vnode){
            const src = el.getAttribute('loadsrc')
            let newImg = new Image()
            newImg.src = src
            newImg.onload = function(){
                el.parentNode.parentNode.firstChild.style.zIndex = -10
                el.src = src
            }
        }
    },
    components: {
        Loading
    },
    methods: {
        getPostPath (path) {
            return this.$site.base + path.substr(1)
        },
        getLoadingType () {
            return randomLoading()
        },
        isMobile () {
            // return window.document.body.clientWidth <= 750;
        },
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
            if (post.frontmatter.cover) return post.frontmatter.cover
            post.frontmatter.cover = `https://picsum.photos/400/150/?random&${post.key}`
            return `https://picsum.photos/400/150/?random&${post.key}`
        }
    },

    created() {
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
            .date
                transform:rotate(7deg);
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
    position relative
    display block
    a
        font-weight bold
        font-size 18px
        color #666
        transition 0.4s
        &:hover
            text-decoration underline
        .date
            transition 0.4s
            position absolute
            right 0px
            top 0px
            font-size: 12px
            color rgba(57,170,86, 0.3)
.post-img
    max-width 100%
    margin 0 0 5px
    min-height 150px
    position relative
    .img-loading
        background #f1f1f1
        display flex
        align-items center
        justify-content center
        position absolute
        left 0
        top:0
        z-index 1
        width 100%
        height 100%
    .img-link
        display block
        width 100%
        max-height 150px
        overflow hidden
    img
        width 100%
        display block
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
