<template>
    <div class="g-loading">
        <div class="lds-roller" v-if="type === 'roller'">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="lds-hourglass" v-else-if="type === 'hourglass'"></div>
        <div class="lds-ripple" v-else-if="type === 'ripple'">
            <div></div>
            <div></div>
        </div>
        <div class="lds-ellipsis" v-else-if="type === 'ellipsis'">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="lds-heart" v-else-if="type === 'heart'"><div></div></div>
        <div class="progress" v-if="progress">100%</div>
    </div>
</template>

<script>
export default {
    name: 'loading',
    props: {
        type: {
            type: String,
            default: 'roller'
        },
        progress: {
            type: Boolean,
            default: false
        }
    },
    computed: {},
    components: {},

    created() {
        // console.log(this.$page)
    }
}
</script>

<style lang="stylus">
.g-loading
    display flex
    align-items center
    justify-content center
.lds-roller
    display inline-block
    position relative
    width 64px
    height 64px
.lds-roller div
    animation lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite
    transform-origin 32px 32px
.lds-roller div:after
    content ' '
    display block
    position absolute
    width 6px
    height 6px
    border-radius 50%
    background #39aa56;
    margin -3px 0 0 -3px
.lds-roller div:nth-child(1)
    animation-delay -0.036s
.lds-roller div:nth-child(1):after
    top 50px
    left 50px
.lds-roller div:nth-child(2)
    animation-delay -0.072s
.lds-roller div:nth-child(2):after
    top 54px
    left 45px
.lds-roller div:nth-child(3)
    animation-delay -0.108s
.lds-roller div:nth-child(3):after
    top 57px
    left 39px
.lds-roller div:nth-child(4)
    animation-delay -0.144s
.lds-roller div:nth-child(4):after
    top 58px
    left 32px
.lds-roller div:nth-child(5)
    animation-delay -0.18s
.lds-roller div:nth-child(5):after
    top 57px
    left 25px
.lds-roller div:nth-child(6)
    animation-delay -0.216s
.lds-roller div:nth-child(6):after
    top 54px
    left 19px
.lds-roller div:nth-child(7)
    animation-delay -0.252s
.lds-roller div:nth-child(7):after
    top 50px
    left 14px
.lds-roller div:nth-child(8)
    animation-delay -0.288s
.lds-roller div:nth-child(8):after
    top 45px
    left 10px
@keyframes lds-roller
    0%
        transform rotate(0deg)
    100%
        transform rotate(360deg)
.lds-hourglass
    display inline-block
    position relative
    width 64px
    height 64px
.lds-hourglass:after
    content ' '
    display block
    border-radius 50%
    width 0
    height 0
    margin 6px
    box-sizing border-box
    border 26px solid #fff
    border-color #39aa56 transparent #39aa56 transparent
    animation lds-hourglass 1.2s infinite
@keyframes lds-hourglass
    0%
        transform rotate(0)
        animation-timing-function cubic-bezier(0.55, 0.055, 0.675, 0.19)
    50%
        transform rotate(900deg)
        animation-timing-function cubic-bezier(0.215, 0.61, 0.355, 1)
    100%
        transform rotate(1800deg)
.lds-ripple
    display inline-block
    position relative
    width 64px
    height 64px
.lds-ripple div
    position absolute
    border 4px solid #39aa56
    opacity 1
    border-radius 50%
    animation lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite
.lds-ripple div:nth-child(2)
    animation-delay -0.5s
@keyframes lds-ripple
    0%
        top 28px
        left 28px
        width 0
        height 0
        opacity 1
    100%
        top -1px
        left -1px
        width 58px
        height 58px
        opacity 0
.lds-ellipsis
    display inline-block
    position relative
    width 64px
    height 64px
.lds-ellipsis div
    position absolute
    top 27px
    width 11px
    height 11px
    border-radius 50%
    background #39aa56
    animation-timing-function cubic-bezier(0, 1, 1, 0)
.lds-ellipsis div:nth-child(1)
    left 6px
    animation lds-ellipsis1 0.6s infinite
.lds-ellipsis div:nth-child(2)
    left 6px
    animation lds-ellipsis2 0.6s infinite
.lds-ellipsis div:nth-child(3)
    left 26px
    animation lds-ellipsis2 0.6s infinite
.lds-ellipsis div:nth-child(4)
    left 45px
    animation lds-ellipsis3 0.6s infinite
@keyframes lds-ellipsis1
    0%
        transform scale(0)
    100%
        transform scale(1)
@keyframes lds-ellipsis3
    0%
        transform scale(1)
    100%
        transform scale(0)
@keyframes lds-ellipsis2
    0%
        transform translate(0, 0)
    100%
        transform translate(19px, 0)

.lds-heart {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  transform: rotate(45deg);
  transform-origin: 32px 32px;
}
.lds-heart div {
  top: 23px;
  left: 19px;
  position: absolute;
  width: 26px;
  height: 26px;
  background: #39aa56;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 26px;
  height: 26px;
  background: #39aa56;
}
.lds-heart div:before {
  left: -17px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -17px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}

</style>
