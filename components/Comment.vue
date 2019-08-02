<template>
    <div>
        <div id="gitalk-container"></div>
    </div>
</template>

<script>
import 'gitment/style/default.css'
export default {
    name: 'comment',
    components: {},
    data() {
        return {
            gitment: null
        }
    },

    computed: {},

    mounted() {
        import('gitment').then(module => {
            const gitment = module.default
            const config = this.$themeConfig.gitment
            this.gitment = new gitment({
                oauth: {
                    client_id: config.oauth.client_id,
                    client_secret: config.oauth.client_secret,
                },
                repo: config.repo,
                owner: config.owner,
                id: location.pathname
            })
            this.gitment.render("gitalk-container");
        })
    },

    beforeDestroy() {},
    created() {
    }
}
</script>

<style lang="stylus"></style>
