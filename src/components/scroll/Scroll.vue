<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null,
      aa: 1
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM: true,
      // 开启实时监听位置
      probeType: 3,
       click: true,
    })
    this.scroll.refresh()

  },
  methods: {
    scrollTo(x,time){
      this.scroll.scrollToElement(x,time)
    }
  },
}
</script>

<style scoped>

</style>
