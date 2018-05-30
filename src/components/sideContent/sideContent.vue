<template>
    <div class="wrap">
        <div class="title">
            <span class="text">{{title}}</span>
            <span class="route">
                <a @click="backIndex">首页</a>
                >
                {{$store.state.menu[$store.state.page].text}}
                >
                {{title2}}
            </span>
        </div>
        <div class="content" v-html="content"></div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            required: true
        },
        title2:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true
        }
    },
    methods:{
        backIndex() {
            this.$store.state.page = 0
            this.$router.push('/index')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrap
        display inline-block
        width 700px
        min-height 255px
        overflow hidden
        padding-bottom 10px
        vertical-align top
        margin-left 5px
        .title
            font-size 14px
            height 20px
            clear both
            padding-right 5px
            width 695px
            border-bottom 2px #969696 solid
            .text
                float left
                font-weight bold
                color #000
            .route
                float right
                font-size 12px
                line-height 20px
                cursor default
                &>a
                    color #000
                    cursor pointer
        .content
            padding 10px 0px
            font-size 0px
</style>
