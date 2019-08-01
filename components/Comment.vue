<template>
    <div>
        <div id="gitalk-container"></div>
    </div>
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
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
            const Gitalk = module.default
            const config = this.$themeConfig.gitalk
            this.gitalk = new Gitalk({
                clientID: config.clientID,
                clientSecret: config.clientSecret,
                repo: config.repo,
                owner: config.owner,
                admin: [
                    '糖小米'
                ],
                id: location.pathname, // Ensure uniqueness and length less than 50
                distractionFreeMode: false, // Facebook-like distraction free mode
                language: 'zh-CN'
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
