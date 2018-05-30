<template>
  <div>
    <Banner></Banner>
    <div class="content">
      <sidebar :menu="menu" :title="title" @handoff="handoff"></sidebar>
      <sideContent :title="contentTitle" :title2="menuContent.text" :content="menuContent.content"></sideContent>
    </div>
  </div>
</template>

<script>
import banner from '@/components/banner/banner'
import sidebar from '@/components/sidebar/sidebar'
import sideContent from '@/components/sideContent/sideContent'

export default {
  data() {
    return {
      id:0
    }
  },
  components:{
    Banner:banner,
    sidebar:sidebar,
    sideContent:sideContent
  },
  created() {
    if (this.$route.query.id) {
      this.id = this.$route.query.id
    }
    this.menu = this.$store.state.about.menu
    this.title = this.$store.state.menu[this.$store.state.page].text
  },
  methods:{
    handoff(id) {
      this.id = id
    }
  },
  computed:{
    menuContent() {
      return this.$store.state.about.menu[this.id]
    },
    contentTitle() {
      return this.menu[this.id].text
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    padding 10px 0px
</style>
