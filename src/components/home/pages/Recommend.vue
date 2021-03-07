<template>
  <div class="recommend">
    <div class="top">
      <span>
        <img src="../../../assets/img/hot.svg" alt="">
      </span>
      <span>本周热门榜单</span>
      <span class="top-title">全部榜单 ></span>
    </div>
    <div class="content">
      <ul class="hot-list">
        <li v-for="(item,index) in imageList" :key="index" >
          <img :src=item.url>
          <p class="hot-title">{{item.title}}</p>
          <div class="text">
            <span class="price">￥{{item.price}}</span>
            <span>起</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
 props: {
   imageList: Array
 }
}
</script>

<style scoped>
.recommend{
  padding-top: 0.1rem;
  padding-left: 0.1rem;
  border-bottom: 8px solid rgb(230, 227, 227);
}
.top{
  height: 0.5rem;
  position: relative;
  font-size: 0.27rem;
  font-weight: bold;
}
.top img{
  width: 0.35rem;
  height: 0.35rem;
}
.top-title{
  font-weight: normal;
  font-size: 0.2rem;
  position: absolute;
  right: 0.2rem;
  bottom: 0.05rem;
}
.content{
  font-size: 0.2rem;
  /* border: 1px solid #000; */
  text-align: center;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 0.2rem 0;
}
.hot-list{
display: flex;
}
.hot-list li{
  width: 2rem;
  margin: 0 0.1rem;
}
.content img{
  width: 2rem;
  height: 2rem;
}
.text{
  line-height: 1.5em;
}
.price{
  color: red;
}
.hot-title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
