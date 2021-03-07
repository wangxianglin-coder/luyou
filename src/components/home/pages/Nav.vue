<template>
  <div class="nav">
    <div class="left">
      <span class="iconfont">&#xe758;</span>
      广州
    </div>
    <div class="right">
      <span class="iconfont">&#xe758;</span>
      玩水季
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
  display: flex;
  height: 0.6rem;
  font-size: 0.26rem;
  border-bottom: 8px solid rgb(230, 227, 227);
  padding: 3px 0;
}
.nav div{
  display: flex;
  justify-content: center;
  align-items: center;
}
.left{
   /* height: 0.6rem; */
  flex: 1;
  border-right: 1px solid #ccc;
}
.right{
  flex: 1;
}
</style>
