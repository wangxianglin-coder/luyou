<template>
 <div>
      <swiper :options="swiperOptions" class="swiper">
        <swiper-slide v-for="item in swiperList" :key="item.id" >
         <img :src="item.url" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>

 </div>

</template>

<script>


export default {
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination:{
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: true,
      },
    }
  }
}
</script>

<style scoped>
.swiper{
  height: 2rem;
}
.swiper img{
  width: 100%;
  height: 2rem;
}
</style>
