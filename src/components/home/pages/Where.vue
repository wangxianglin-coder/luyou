<template>
  <div>
    <div class="logo">
      <span>
        <img src="../../../assets/img/week.svg" alt="">
      </span>
      <span>周末去哪</span>
    </div>
    <div class="content" v-for="(item,index) in whereList" :key="index">
      <img :src=item.image>
      <div class="text">
       <p>{{item.title}}</p>
       <p class="product-desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="footer">
      <img src="../../../assets/img/gantan.svg" alt="">
      <span>票面价</span>
      <span>是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    whereList: Array
  }
}
</script>

<style scoped>
.logo{
  padding: 0.2rem 0.1rem;
  font-size: 0.3rem;
  font-weight: bold;
}
.logo img{
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.1rem;
}
.content{
  padding: 0.1rem 0;
  margin-bottom: 0.2rem;
  font-size: 0.35rem;
  border-bottom: 8px solid rgb(240, 237, 237);
}
.content img{
  width: 100%;
  height: 3rem;
}
.text{
  padding: 0.2rem 0.2rem;
  line-height: 1.5em;
}
.product-desc{
  font-size: 0.26rem;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.footer img{
  width: 0.3rem;
  height: 0.3rem;
  opacity: 0.5;
  margin-right: 0.05rem;
}
.footer{
  text-align: left;
  font-size: 0.23rem;
  padding-bottom: 0.2rem;
  color: rgb(185, 184, 184);
  /* border-bottom: 1px solid #ccc; */
  box-shadow: 0 2px 3px rgb(223, 223, 223);
}
</style>
