<template>
    <header class="top-bar">
        <div class="layout-inner">
            <h1 class="logo">
                <a href="/">{{$site.title}}</a>
            </h1>
            <div class="search" v-if="$themeConfig.search">
                <SearchBox />
            </div>
        </div>
    </header>
</template>

<script>
import SearchBox from '@SearchBox'
export default {
    name: 'top-bar',

    components: {
        SearchBox
    },

    created() {}
}
</script>

<style lang="stylus">
.top-bar
    background-color #f1f1f1
    padding 10px 0px
    position fixed
    left 0
    top 0
    width 100%
    z-index 9999
    .layout-inner
        display flex
        align-items center
        justify-content space-between
.logo
    padding 0 1em
    padding-left 0
    a
        display block
        font-size 28px
        color #9d9d9d
.search .suggestions.align-right
    right auto
    border-radius 2px
    *
        border-radius 2px
.search input
    display inline-block
    width 100%
    padding 0.1em 0.5em 0.1em
    border-radius 2px
    border 2px solid #9d9d9d8c
    font inherit
    background-color white
    background-size 15px
    background-position 96% center
    background-repeat no-repeat
    &:focus
        border 2px solid #9d9d9d
</style>
