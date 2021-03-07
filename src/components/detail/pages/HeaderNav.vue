<template>
<div>
   <div class="header-nav" v-show="isShow" :style="styleOpacity">
    <div class="left iconfont" @click="backHome">&#xe743;</div>
    <div class="right">广州天河区</div>
  </div>
</div>

</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      styleOpacity:{
        opacity: 0
      }
    }
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener("scroll",() => {
      // 获取滚动距离
      let top = document.documentElement.scrollTop
     if(top > 70){
       let opacity = top/130
       opacity = opacity > 1 ? 1 : opacity
       this.styleOpacity = {
         opacity
       }
       this.isShow = true
     }else{
       this.isShow = false
     }

    })
  },
  methods: {
    backHome(){
      this.$router.push('/')
    }
  },
}
</script>
<style scoped>
.header-nav{
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.58rem;
  background-color: #73d2df;
  padding: 0.1rem 0;
  align-items: center;
  font-size: 0.3rem;
  color: #fff;
  z-index: 9;
}
.left{
  padding: 0.2rem 0.1rem;
}
.right{
  flex: 1;
  text-align: center;
}
</style>
