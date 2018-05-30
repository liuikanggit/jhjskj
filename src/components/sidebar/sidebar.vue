<template>
    <div class="wrap">
        <div class="title">{{title}}</div>
        <ul class="menu">
            <li class="menu-item" v-for="(item,index) in menu" :key="index" @click="handoff(item.id)">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            required: true
        },
        menu:{
            type: Array,
            required: true
        }
    },
    methods:{
        handoff(id) {
            this.$emit('handoff', id)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrap
        display inline-block
        width 260px
        overflow hidden
        margin-left 5px
        .title
            height 20px
            font-size 14px
            font-weight bold
            border-bottom 2px #969696 solid
        .menu
            padding-left 10px
            overflow hidden
            .menu-item
                width 100%
                height 20px
                border-bottom 1px #969696 solid
                padding-top 10px
                font-size 12px
                cursor pointer
                &:hover
                    color #000363
</style>
