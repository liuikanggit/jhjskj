<template>
  <div class="wrap">
      <ul class="box" :style="{width:pics.length + '00%', left : '-' + index +'00%'}">
          <li class="box-item" v-for="pic in pics" :key="pic">
              <img :src="pic" alt="">
          </li>
      </ul>
      <div class="controller">
          <span class="num" :class="(index+1) == num ? 'active':''" v-for="num in pics.length" :key="num" @click="slide(num-1)">{{num}}</span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            pics:[require('./slide1.jpg'),
            require('./slide2.jpg'),
            require('./slide3.jpg')],
            index:0
        }
    },
    methods:{
        slide(index) {
            this.index = index
        }
    },
    mounted: function () {
        this.$nextTick(() => {
            setInterval(() => {
                this.index = (this.index + 1) % this.pics.length
            }, 5000)
        })
    }
}
</script>

<style lang="stylus" scoped>
    .wrap
        position relative
        width 980px
        height 368px
        margin 0 auto
        overflow hidden
        .box
            position absolute
            height 368px
            font-size 0px
            top 0
            left 0%
            transition all 1s
            .box-item
                width 980px
                height 368px
                display inline-block
        .controller
            position absolute
            bottom 5px
            right 20px
            .num
                display inline-block
                background-color #036
                color #fff
                font-size 12px
                padding 5px 7px
                margin 0 2px
                cursor pointer
                &:hover
                    background-color #069
            .active
                background-color #069
</style>
