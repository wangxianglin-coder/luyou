<template>
  <div class="header">
    <div class="header-top" @click="toImg">
      <img src="https://imgs.qunarzz.com/vs_ceph_b2c_001/7a6c15f0-f9b8-4e6a-b05e-0f6fa94f5d79.jpg_r_390x260x95_4b2db2b6.jpg">
      <p class="title">那三款VN你上课</p>
      <div class="back" @click="backHome">
        <span class="iconfont">&#xe743;</span>
      </div>
    </div>

    <!-- 相册部分 -->
    <div class="img-header" v-show="isShow" @click="back">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item in bannerList" :key="item.id" class="content">
         <img :src="item.image" alt="">
        </swiper-slide>
      </swiper>
     <div class="swiper-pagination"  slot="pagination"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      swiperOptions: {
        pagination:{
          el: '.swiper-pagination',
          type: 'fraction',
        },
          loop: true,
          autoplay: true
        },

      bannerList: [
        {
          "id": "01",
          "image":"//imgs.qunarzz.com/vs_ceph_b2c_001/45f21e18-acc3-4381-be78-c596fe88a4fc.jpg_r_390x260x95_c26083ab.jpg"
        },
         {
          "id": "02",
          "image":"//imgs.qunarzz.com/vs_ceph_b2c_001/febe662e-605f-410c-8876-237914f1043d.jpg_r_390x260x95_929f2f59.jpg"
        },
         {
          "id": "03",
          "image":"//imgs.qunarzz.com/vs_ceph_b2c_001/9c9f60ba-07c3-4d17-8537-8276e2771363.jpg_r_390x260x95_24a80c62.jpg"
        },
         {
          "id": "04",
          "image":"//imgs.qunarzz.com/vs_ceph_b2c_001/217f9b34-9f83-4cbb-8624-e74db6dbe3ff.jpg_r_390x260x95_8dd15127.jpg"
        },
         {
          "id": "05",
          "image":"//imgs.qunarzz.com/vs_ceph_b2c_001/fccf16b8-4306-45b5-ba5a-41def47759b7.jpg_r_390x260x95_ea8893c1.jpg"
        },
      ],
      isShow: false
    }
  },
  methods: {
    toImg(){
      this.isShow = true
    },
    back(){
      this.isShow = false
    },
    backHome(){
      this.$router.push('/')
    }

  },
}
</script>

<style scoped>
.header{
  position: relative;
  font-size: 0.33rem;
  /* border: 1px solid #000; */
}
.header-top img{
  width: 100%;
}
.title{
  position: absolute;
  left: 0.1rem;
  bottom: 0.2rem;
  color: #fff;
}
.img-header{
  position: fixed;
  background-color: #000;
  top: 0;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  color: #fff;
}
.img-header img{
  position: relative;
  width: 100%;
}
.back{
  text-align: center;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  top: 0.2rem;
  left: 0.1rem;
  padding: 0.1rem;
  color: wheat;
  border-radius: 50%;
}


</style>
