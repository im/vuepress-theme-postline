<template>
    <div class="post-item">
        <div class="post-date-top"><span>{{post.createDate.date}}</span></div>
        <div class="post-dot"></div>

        <div class="post-title">
            <a :href="post.path" :title="post.title">{{post.title}}</a>
        </div>

        <div class="post-img">
            <a :href="post.path" v-if="post.frontmatter.cover">
                <img :src="post.frontmatter.cover" :alt="post.title">
            </a>
        </div>

        <div class="post-cont">
            <Content />
        </div>

        <div class="post-meta">
            <a target="_blank" href="https://github.com/im" class="author">
                <img src="https://avatars3.githubusercontent.com/u/12029165?s=460&amp;v=4" class="avatar">糖小米
            </a>
            <span class="post-date-bottom">{{post.createDate.fromNow}}</span>
        </div>

    </div>
</template>

<script>
export default {
    name: 'post-item',
    props: {
        post: {
            type: Object,
            'default': () => {}
        }
    },
    components: {
    },

    created() {
        console.log(this.post)
    }
}
</script>

<style lang="stylus" scoped>
.post-item
    width 100%
    margin-bottom 40px
    background-color #fff
    border solid 1px #f1f1f1
    padding 14px
    position relative
    .post-date-top
        width 100%
        position absolute
        left 0
        top -12px
        text-align center
        span 
            background-color #f1f1f1
            color #9d9d9d
            padding: 0px 10px;
            display: inline-block;
    &:after
        position absolute
        top 7px
        display block
        content: ''
        width:0;
        height:0;
    &:before
        position absolute
        top 7px
        display block
        content: ''
        width:0;
        height:0;
    .post-dot
        width: 12px;
        height: 12px;
        background-color: #f1f1f1;
        border: solid 3px #60829f;
        position: absolute;
        top: 10px;
        z-index: 100;
        border-radius: 100%;
.post-title
    margin-bottom 10px
    a
        font-size: 18px
        color #666
        &:hover
            text-decoration: underline;
.post-img
    max-width: 100%;
    margin: 0 0 5px;
    img
        max-width 100%
.post-cont
    margin-bottom 20px;
.post-meta
    display flex
    align-items center
    justify-content space-between
    .post-date-bottom
        font-size: 14px
        color #666
    .author
        display flex
        align-items center
        font-size 14px
    .avatar
        width: 28px;
        height: 28px;
        margin-right: .3em;
        vertical-align: middle;
        border-radius: 50%;
        border: 1px solid #f1f1f1;
</style>
