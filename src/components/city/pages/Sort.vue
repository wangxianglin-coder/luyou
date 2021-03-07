<template>
  <div class="sort">
    <div class="top">字母排序</div>
    <ul class="sort-list">
      <li v-for="(item,key) in cities" :key="key"
      @click="changSort(key)">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cities: {}
  },
  methods: {
    changSort(key){
     this.$emit("changSort",key)
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
.sort-list{
  /* border: 1px solid #000; */
  width: 100%;
  font-size: 0.31rem;

}
/* 清除浮动 */
.sort-list:after {
  clear:both;
  content:'';
  display:block;
  width:0;
  height:0;
  visibility:hidden;
}
.sort-list li{
  float: left;
  width: 16.4%;
  text-align: center;
  padding: 0.3rem 0;
}
</style>
