<template>
    <div>
        <div id="gitalk-container"></div>
    </div>
</template>

<script>
import 'gitalk/dist/gitalk.css'
export default {
    name: 'comment',
    components: {},
    data() {
        return {
            gitalk: null
        }
    },

    computed: {},

    mounted() {
        import('gitalk').then(module => {
            const gitalk = module.default
            const config = this.$themeConfig.gitalk
            this.gitalk = new gitalk({
                clientID: config.clientID,
                clientSecret: config.clientSecret,
                repo: config.repo,
                owner: config.owner,
                admin: config.admin,
                // id: location.pathname,
                id: 'gitalk',
                labels: config.labels,
                language: config.language,
                distractionFreeMode: config.distractionFreeMode
            })
            this.gitalk.render("gitalk-container");
        })
    },

    beforeDestroy() {},
    created() {
    }
}
</script>

<style lang="stylus"></style>
