<template>
  <div class="wrap">
      <div class="wrap-content">
            <div class="logo"></div>
            <div class="company">
                <span class="cn">丹阳市俊晧金属科技有限公司</span>
                <span class="en">Danyang JunHao Metal Co., Ltd</span>
            </div>
          <ul class="nav">
              <li class="nav-item"><a href="https://shop1746259766i52.1688.com" target="blank">阿里店铺</a></li>
              <li class="nav-item"><a href="https://shop428775974.taobao.com/" target="blank">淘宝店铺</a></li>
              <!-- <li class="nav-item"><a>设为首页</a></li> -->
              <li class="nav-item"><a href="javascript:;" @click="addFavorite">加入收藏</a></li>
          </ul>
      </div>
       <ul class="menu">
              <li v-for="(item,index) in $store.state.menu" :key="index" class="menu-item" :class="page == index?'active':''" @click="handoff(index)">
                  <span class="icon" :class="'icon-'+item.router"></span>
                  <span class="text">{{item.text}}</span>
              </li>
        </ul>
  </div>
</template>

<script>
export default {
    methods:{
        handoff(index) {
            this.$emit('handoff', index)
        },
        addFavorite() {
            let url = 'http://www.jhjskj.com.cn'
            let title = '俊晧金属官网'
            try {
                window.external.addFavorite(url, title)
            } catch (e) {
                try {
                    window.slidebar.addPanel(title, url, '')
                } catch (e) {
                    alert('加入收藏失败，\n请使用Ctrl+D进行添加！')
                }
             }
        }
    },
    computed:{
        page : function() {
            return this.$store.state.page
        }
    },
    watch:{
        'this.$router.name'(newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import "../../common/style/icon.styl"

  .wrap
    overflow hidden
    .wrap-content
        position relative
        width 980px
        height 75px
        margin 0 auto
        //background-color #eee
        overflow hidden
        .logo
            float left
            height 75px
            width 95px
            background-position 0px 0px
            background-image url(./logo.png)
        .company
            float left
            height 75px
            text-align center
            margin-top 25px
            .cn
                display block
                font-size 20px
                font-family "Hiragino Sans GB","Microsoft YaHei"
                border-bottom 2px #015487 solid;
            .en
                display block
                font-family "Hiragino Sans GB",Arial, Helvetica, sans-serif
                font-size 16px
        .nav
            position absolute
            top 0
            right 20px
            .nav-item
                float left
                height 24px
                cursor pointer
                &>a
                    height 24px
                    line-height: 24px;
                    padding 0 8px
                    color #333
                    font-size 12px
                    border-right 1px #999 solid
                &:last-child>a
                    border-right none
                &>a:hover
                    color #a00
    .menu
        width 980px
        height 55px
        overflow hidden
        margin 0 auto
        display flex
        background-color #015487
        .menu-item
            flex 1
            text-align center
            cursor pointer
            color #fff
            font-weight 700
            .icon
                display block
                font-size 20px
                height 20px
                line-height 20px
                margin 7px 0 5px 0;
            .text
                display block
                height 20px
                line-height 20px
                font-size 14px
            &:hover
                color #FC0
        .active
            color #FC0
</style>
