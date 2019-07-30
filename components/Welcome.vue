<template>
    <div class="welcome-main" :class="{completed: isCompleted}">
        <div class="box">
            <div class="welcome-text">Welcome</div>
            <div class="progress" :style="{height: progress + '%'}">
                <div class="text">
                    {{progress}}%
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'welcome',
    props: {
        progress: {
            type: Number,
            default: 0
        }
    },
    watch: {
        progress (val) {
            if (val === 100) {
                setTimeout(() => {
                    this.isCompleted = true;
                    setTimeout(() => {
                        this.$emit('completed')
                    }, 1000)
                }, 1000)
            }
        }
    },
    data () {
        return {
            isCompleted: false
        }
    },
    computed: {},
    components: {},

    created() {
    }
}
</script>

<style lang="stylus" scoped>
.welcome-main
    background #ffffff
    width 100%
    height 100%
    position absolute
    left 0
    top 0
    z-index 9999
    display flex
    align-items center
    justify-content center
    color #39aa56;
    &.completed
        .progress
            right -100px
        .welcome-text
            left 0
    .box
        width 200px
        height 80%
        display flex
        position relative
        overflow hidden
    .progress
        transition 0.5s
        position absolute
        top 0
        right 0
        display flex
        align-items flex-end
        padding-left 10px
        height 100%
        border-left 4px solid #39aa56;
        .text
            font-size 24px
            font-weight bold
            font-family:STHupo
    .welcome-text
        transition 0.5s
        position absolute
        left -200px
        top 0
        display flex
        align-items center
        height 100%
        font-size 40px
        font-weight bold
        font-family:STHupo
    .progress-box
        background red
</style>
