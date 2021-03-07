<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions" >
      <swiper-slide v-for="(item, index) in page" :key="index" class="box">
        <div class="icons-item" v-for="(item, index) in item" :key="index">
          <img :src=item.url>
          <p>{{item.title}}</p>
        </div>
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  data() {
    return {

      swiperOptions: {
         pagination: {
           el: '.swiper-pagination',
         },

      }
    }
  },
  computed: {
    page(){
      const page = []

      this.list.forEach((item,index) => {
        // 向下取整
        let idx = Math.floor(index/8)
        // 把0-8的item添加到 page[0]
        if(!page[idx]) page[idx] = []
        page[idx].push(item)

      })
      return page
    }
  }

}
</script>

<style scoped>
.icons{
  background-color: #fff;
 width: 100%;
 margin-top: 10px;
 border-bottom: 1px solid #ccc;
}
.box:after{
  display: block;
  width: 0;
  height: 0;
  clear: both;
  content: "";
}
.icons-item{
  width: 25%;
  height: 1.5rem;
  font-size: 0.26rem;
  text-align: center;
  float: left;
}
.icons-item img{
   width: 1rem;
   height: 1rem;
}
</style>
