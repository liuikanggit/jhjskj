<template>
  <div id="app">
    <div class="wrap">
      <Header @handoff="handoff"></Header>
      <router-view></router-view>
      <Footer @handoff="handoff"></Footer>
    </div>
  </div>
</template>

<script>
  import header from '@/components/header/header'
  import footer from '@/components/footer/footer'
  export default {
    name: 'App',
    components:{
      Header:header,
      Footer:footer
    },
    methods:{
      getProducts() {
        this.axios.get('/api/product').then((res) => {
          if (res.data.code === 0) {
            this.$store.state.products = res.data.data
            console.log(this.$store.state.products)
          } else {
            alert(res.data.message)
          }
        })
      },
        handoff(index) {
          this.$store.state.page = index
          this.$router.push(this.$store.state.menu[index].router)
        }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getProducts()
      })
  }
}
</script>

<style lang="stylus" scoped>
  #app
    background-image: url(./common/images/back.jpg)
    .wrap
      width 980px
      font-size 12px
      margin 0 auto
      overflow hidden
</style>
