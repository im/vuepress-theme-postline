<template>
    <div class="layout-inner time-line-box">
        <div class="time-line-main">
            <div class="timeline-bar"></div>
            <MonthBox v-for="monthPage in pages" :monthPage="monthPage"></MonthBox>
        </div>
    </div>
</template>

<script>
import MonthBox from '@theme/components/MonthBox.vue'
export default {
    name: 'time-line',
    
    props: {
        pages : {
            type: Array,
            'default': () => []
        }
    },

    components: {
        MonthBox
    },

    created() {
    }
}
</script>

<style lang="stylus">
.time-line-box
    padding-top 95px
    .time-line-main
        position relative
    .timeline-bar
        background-color: #f1f1f1;
        width: 6px;
        height: 100%;
        margin-left: -3px;
        position: absolute;
        left: 50%;
        top: 0;
        border-radius: 20em;
        z-index -1
        box-shadow: inset 0 0 1px 0 rgba(0,0,0,.5), 0 0 1px 0 rgba(255,255,255,.6);
</style>
