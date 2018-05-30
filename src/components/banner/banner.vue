<template>
  <div class="banner"><img class="img" :src="img" alt=""></div>
</template>

<script>
export default {
    created() {
        this.img = require('./' + this.$route.name + '.jpg')
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        width 980px
        height 300
        margin 0 auto
        overflow hidden
        .img
            width 980px
            height 300
</style>
