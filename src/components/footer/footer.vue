<template>
  <div class="wrap">
      <ul class="menu">
          <li class="menu-item" v-for="(item,index) in $store.state.menu" :key="index" @click="handoff(index)">{{item.text}}</li>
      </ul>
      <p class="text">版权所有 © 2018-2018 丹阳俊晧金属科技有限公司<br>
       地址: 江苏省丹阳市吕城镇滨河北路40号  邮政编码：212352<br>
        ICP备案号:  <a href="#">苏ICP备16011675号-1</a><br>
        技术支持：<a href="#">HEO有限公司</a> 技术支持电话: 18021396096
       </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods:{
        handoff(index) {
            this.$emit('handoff', index)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrap
        width 980px
        margin 0 auto
        padding 10px 0
        background-color #015487
        .menu
            display flex
            .menu-item
                flex 1
                display block
                text-align center
                color #fff
                font-size 12px
                height 24px
                font-weight 700
                line-height 24px
                border-right 1px #969696 solid
                cursor pointer
                &:hover
                    color #E0DC56
        .text
            color #fff
            text-align center
            line-height 24px
            font-size 10px
            margin-top 10px
            a
                color #fff

</style>
