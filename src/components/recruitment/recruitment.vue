<template>
   <div class="wrap">
    <Banner></Banner>
    <div class="content">
      <sidebar :menu="menu" :title="title" @handoff="handoff"></sidebar>
      <sideContent :title="title" :title2="title" :content="'<h2>暂无更多信息</h2>'"></sideContent>
    </div>
  </div>
</template>

<script>
import banner from '@/components/banner/banner'
import sidebar from '@/components/sidebar/sidebar'
import sideContent from '@/components/sideContent/sideContent'

export default {
  components:{
    Banner:banner,
    sidebar:sidebar,
    sideContent:sideContent
  },
  created() {
    this.menu = this.$store.state.about.menu
    this.title = this.$store.state.menu[this.$store.state.page].text
  },
  methods:{
    handoff(id) {
      console.log(id)
      this.$store.state.page = 1
      this.$router.push({
            path: '/about',
            query: {
                id: id
            }
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    padding 10px 0px
</style>
