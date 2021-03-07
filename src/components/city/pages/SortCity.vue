<template>
  <div class="sort">
    <div  v-for="(val,key) in cities" :key="key" :ref="key">
      <div class="top">{{key}}</div>
      <ul class="sort-city-list">
        <li v-for="(item,index) in val" :key="index" @click="sortChangCity(item.name)">{{item.name}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    cities: {}
  },
  methods: {
    sortChangCity(item){
      this.$router.push('/')
      this.$store.commit("changCity",item)
    }
  },
}
</script>

<style scoped>
.sort{
  font-size: 0.2rem;
}
.top{
  padding: 0.25rem 0.2rem;
  background-color: #eee;
}
.sort-city-list{
  /* border: 1px solid #000; */
  width: 100%;
  font-size: 0.31rem;
}
/* 清除浮动 */
.sort-city-list:after{
  display: block;
  content: " ";
  clear: both;
  width: 0;
  height: 0;
  visibility: hidden;
}
.sort-city-list li{
  float: left;
  width: 24.7%;
  text-align: center;
  padding: 0.3rem 0;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.sort-city-list li:nth-child(4n){
  border-right: none;
}
</style>
