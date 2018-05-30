<template>
    <div class="wrap" >
        <div class="wrap-content" @mouseenter="stopPlay" @mouseleave="paly">
            <ul class="picList" :style="{width : products.length * 232 + 'px',left:left + 'px'}" >
                <li class="pic-item" v-for="pro in products" :key="pro.id" @click="productDisplay(pro.id)">
                    <img class="pic" :src="img(pro.imgUrl)" :alt="pro.name">
                    <div class="text">{{pro.name}}</div>
                </li>
            </ul>
        </div>
        <a v-show="show" class="controller left" @click="isLeft=true" v-html="'\<'"></a>
        <a v-show="show" class="controller right" @click="isLeft=false" v-html="'>'"></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            left:0,
            isLeft:true,
            request:undefined,
            show:false
        }
    },
    methods:{
        img(imgUrl) {
            return imgUrl.split('_')[0]
        },
        stopPlay() {
            if (this.request) {
                // console.log('stop')
                cancelAnimationFrame(this.request)
                this.request = undefined
            }
        },
        paly() {
            if (!this.request) {
                this.loop()
            }
        },
        loop : function() {
            this.isLeft ? this.left-- : this.left++
            if (this.left > 0) {
                this.isLeft = true
            }
            if (this.left < 928 - this.products.length * 232) {
                this.isLeft = false
            }
            this.request = requestAnimationFrame(this.loop)
        },
        productDisplay(id) {
        }
    },
    computed:{
        products() {
            return this.$store.state.products
        }
    },
    watch:{
        'products': function() {
             if (this.products.length * 232 > 928) {
                this.paly()
                this.show = true
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrap
        position relative
        width 980px
        height 145px
        padding 5px 0 10px 0
        margin 0 auto
        overflow hidden
        .wrap-content
            width 928px
            overflow hidden
            margin 0 auto
            .picList
                position relative
                height 100%
                font-size 0
                .pic-item
                    display inline-block
                    width 216px
                    margin 0 8px
                    cursor pointer
                    .pic
                        width 216px
                        height 114px
                        padding 2px
                        border 1px solid #9c9c9c
                    .text
                        text-align center
                        font-size 12px
                        line-height 24px
                        &:hover
                            color #013
                            font-weight 600
        .controller
            position absolute
            top 50%
            margin-top -25px
            font-size 32px
            cursor pointer
            font-weight bolder
            font-family '黑体'
            width 20px
            height 40px
            line-height 40px
            color #000
        .left
            left 0px
        .right
            right 0px

</style>
