<template>
<div class="wrap">
  <slideBox></slideBox>
  <div class="content">
    <div class="content-wrap">
      <div class="title">公司简介</div>
      <p class="text" v-html="introduction"></p>
    </div>
    <div class="content-wrap">
      <div class="title">热门产品</div>
      <ul class="hot">
        <li class="hot-item" v-for="item in hot" :key="item.id" @click="productDisplay(item.id)">{{item.name}}</li>
      </ul>
    </div>
  </div>
  <picMarquee></picMarquee>
</div>
</template>

<script>
import slideBox from '@/components/slideBox/slideBox'
import picMarquee from '@/components/picMarquee/picMarquee'

export default {
  data() {
    return {
    }
  },
  created() {
    this.introduction = this.$store.state.about.menu[0].content
  },
  computed: {
    hot() {
      return this.$store.state.products.filter((item) => {
        return item.hot === 1
      })
    }
  },
  components:{
    slideBox:slideBox,
    picMarquee:picMarquee
  }
}
</script>

<style lang="stylus" scoped>
  .wrap
    width 980px
    margin 0 auto
    .content
      padding 20px 2px 5px 2px
      &::after
        content ""
        display block
        clear both
      .content-wrap
        float left
        width 50%
        padding 0 10px
        box-sizing border-box
        .title
          height 20px
          padding-top 5px
          border-bottom 2px #015487 solid
          font-size 14px
          font-weight bold
        .text
          color #3c3c3c
          font-size 12px
          text-align left
          line-height 200%
          font-family Arial,Simsun,sans-self
          text-indent 2em
        .hot
          color 3c3c3c
          width 100%
          font-size 16px
          .hot-item
            display inline-block
            padding 5px 0
            margin-right 30px
            cursor pointer
            &:hover
              color #3d0d9d
</style>
