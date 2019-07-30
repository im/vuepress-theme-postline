<template>
    <div class="theme-container postline">
        <TopBar></TopBar>
        <Home v-if="isHome"></Home>
        <!-- <div class="postline-loading" v-if="loading">
            <Loading ref="loading" :type="getLoadingType()"></Loading>
        </div>
        <TimeLine v-if="isHome" :pages="pages"></TimeLine>
        <Page v-else></Page>-->
    </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Page from '@theme/components/Page.vue'
import TopBar from '@theme/components/TopBar.vue'
export default {
    components: {
        TopBar,
        Home
    },

    data() {
        return {}
    },

    computed: {
        isHome() {
            return this.$page.frontmatter.home
        }
    },

    mounted() {},

    methods: {},

    mounted() {
        // this.$bus.$on('loaded', () => {
        //     this.loading = false
        // })
    },

    beforeDestroy() {
        // this.$bus.$off('loaded')
    },

    created() {}
}
</script>

<style lang="stylus">
#app
    width 100%
    height 100%
.postline
    width 100%
    height 100%
    position relative
.medium-zoom--open
    .medium-zoom-overlay
        z-index 10000
    .medium-zoom-image--open
        z-index 10001
</style>
