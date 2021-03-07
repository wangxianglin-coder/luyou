<template>
  <div class="like">
    <div class="like-top">

        <img src="../../../assets/img/like.svg" alt="">
      <!-- </span> -->
      猜你喜欢
    </div>
    <div class="content" v-for="(item,index) in goods" :key="index" @click="toDetail">
      <div class="left">
       <img :src=item.image>
      </div>
      <div class="right">
        <div class="title">{{item.title}}</div>
        <div class="pl">{{item.pl}}条评论</div>
        <div>
          <span class="price">￥{{item.price}}</span>
          <span>起</span>
          <span class="map">{{item.map}}</span>
        </div>
      </div>
    </div>
    <div class="like-footer">
      查看所有产品
    </div>
  </div>
</template>
<script>
export default {
 props: {
   goods: Array
 },
 methods: {
   toDetail(){
     this.$router.push('/detail')
   }
 },
}
</script>

<style scoped>

.like-top{
  font-size: 0.28rem;
  font-weight: bold;
  padding: 0.1rem 0.1rem;
}
.like-top img{
  width: 0.4rem;
  height: 0.4rem;
}
.content{
  padding: 0.2rem 0.2rem;
  font-size: 0.3rem;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.left{
  flex: 1;
}
.right{
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.2rem;
}
.pl{
  font-size: 0.2rem;
}
.price{
  font-size: 0.4rem;
  color: red;
}
.map{
  font-size: 0.1rem;
  float: right;
  margin-top: 0.15rem;
}
.content img{
width: 100%;
height: 100%;
}
.title{
  font-size: 0.4rem;
}
.like-footer{
  padding: 0.2rem 0;
  font-size: 0.3rem;
  color: blueviolet;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
</style>
