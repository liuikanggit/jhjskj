<template>
  <div>
    <Banner></Banner>
    <div class="content">
      <sidebar :title="title"></sidebar>
      <side-content></side-content>
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
    this.title = this.$store.state.menu[this.$store.state.page].text
  }
}
</script>

<style lang="stylus" scoped>
  .content
    padding 10px 0px
</style>
