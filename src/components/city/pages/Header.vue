<template>
  <div class="header">
    <div class="top">
      <div class="iconfont" @click="back">&#xe743;</div>
      <div class="top-text">城市选择</div>
    </div>
    <div class="footer" >
      <div v-for="(item,index) in titles" :key="index"
      :class="{active: currentIndex === index}"
      @click="isShow(index)">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titles: ["境内","境外:港澳台"],
      currentIndex: 0
    }
  },
  methods: {
    isShow(index){
      this.currentIndex = index
    },
    back(){
      this.$router.push('/')
    }
  },
}
</script>
<style scoped>
.top{
  display: flex;
  font-size: 0.3rem;
  /* padding-top: 0.3rem; */
  height: 0.5rem;
  background-color:  #00bcd4;
  color: #fff;
  /* border: 1px solid #000; */
  align-content: center;
}
.iconfont{
  width: 0.3rem;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
  padding-left: 0.1rem;
  /* border: 1px solid #000; */
}
.top-text{
 padding-top: 0.16rem;
  flex: 1;
  opacity: 0.9;
  /* border: 1px solid #000; */
  text-align: center;
}
.footer{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.3rem;
  /* border: 1px solid #000; */
  height: 0.8rem;
  background-color:  #00bcd4;
  color: #fff;
  padding: 0 1rem;
}
.footer div{
  border: 1px solid rgb(224, 224, 224);
  flex: 1;
  opacity: 0.9;
  text-align: center;
  padding: 0.08rem;
}

.active{
  background-color: #fff;
  color: #00bcd4;;
}
</style>
