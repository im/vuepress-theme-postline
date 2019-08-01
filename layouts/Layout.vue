<template>
    <div class="theme-container postline">
        <TopBar></TopBar>
        <Home v-if="isHome"></Home>
        <Page v-else></Page>
    </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Page from '@theme/components/Page.vue'
import TopBar from '@theme/components/TopBar.vue'
export default {
    components: {
        TopBar,
        Page,
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
    },

    beforeDestroy() {
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
</style>
