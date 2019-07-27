<template>
    <div class="page-main layout-inner">
        <h2>{{page.title}}</h2>
        <div class="post-img" v-if="$themeConfig.cover && page.frontmatter.cover">
            <a :href="page.frontmatter.cover" target="_blank">
                <img :src="page.frontmatter.cover" :alt="page.title">
            </a>
        </div>

        <Content />

        <div class="post-meta">
            <a target="_blank" :href="$themeConfig.authorInfo.github" class="author" v-if="$themeConfig.authorInfo">
                <img :src="$themeConfig.authorInfo.headerUrl" class="avatar">
                {{$themeConfig.authorInfo.name}}
            </a>
            <span class="post-date-bottom" v-if="page.lastUpdated">更新于：{{page.lastUpdated.fromNow}}</span>
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
    computed: {
        page () {
            return this.$page;
        }
    },
    components: {
    },

    created() {
        // console.log(this.$page)
    }
}
</script>

<style lang="stylus">
.page-main
    padding 70px 10px
    a
        text-decoration underline!important
    .post-img
        max-width: 100%;
        max-height 200px
        overflow hidden
        margin: 0 0 5px;
        img
            max-width 100%
    .post-meta
        margin-top 30px
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
