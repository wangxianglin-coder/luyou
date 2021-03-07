<template>
  <div class="hot-city">
    <div class="top">热门城市</div>
    <ul class="hot">
      <li v-for="(item,index) in hotCities" :key="index" @click="changCity(item.name)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    hotCities: Array
  },
  methods: {
    changCity(val){
      this.$router.push('/')
      this.$store.commit("changCity",val)
    }
  },
}
</script>

<style scoped>
.hot-city{
  font-size: 0.2rem;
}
.top{
  padding: 0.25rem 0.2rem;
  background-color: #eee;
}
.hot{
  /* width: 100%; */
  font-size: 0.31rem;
  overflow: hidden;
}
/* 清除浮动 */
.hot:after {
  clear:both;
  content:'';
  display:block;
  width:0;
  height:0;
  visibility:hidden;
}
.hot li{
  float: left;
  width: 33%;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  text-align: center;
  padding: 0.3rem 0;
}
.hot li:nth-child(3n){
  border-right: none;
}
</style>
