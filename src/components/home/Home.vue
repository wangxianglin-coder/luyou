<template>
    <div>
        <home-header></home-header>
        <home-banner :swiper-list="swiperList"></home-banner>
        <home-icons :list="list"></home-icons>
        <home-nav></home-nav>
        <home-recommend :image-list="imageList"></home-recommend>
        <home-like :goods="goods"></home-like>
        <home-where :where-list="whereList"></home-where>
    </div>
</template>

<script>
import {mapState} from 'vuex'

import HomeHeader from './pages/Header'
import HomeBanner from './pages/Banner'
import HomeIcons from './pages/Icons'
import HomeNav from './pages/Nav'
import HomeRecommend from './pages/Recommend'
import HomeLike from './pages/Like'
import HomeWhere from './pages/Where'
import {Request} from '../../network/request'
export default {
  components: {
    HomeHeader,
    HomeBanner,
    HomeIcons,
    HomeNav,
    HomeRecommend,
    HomeLike,
    HomeWhere
 },
 data() {
   return {
     whereList: [],
     list: [],
     goods: [],
     imageList: [],
     swiperList: [],
     changCity: ''
   }
 },
 computed: {
   ...mapState(['city'])
 },
 mounted() {
  this.http()
  console.log(this.city)
  this.changCity = this.city
 },
 activated() {
   if(this.changCity != this.city){
     this.http()
     this.changCity = this.city
     console.log(this.city)
   }
 },
 methods: {
   http(){
    return Request({
    type: 'GET',
    url: './data/homeData.json'//相对于index.html路径
   }).then(res => {
    const data = res.data.data
    data.forEach(item => {
      if(item.city == this.city){
        //  保存数据
        this.whereList = item.whereList
        this.list = item.list
        this.goods = item.goods
        this.imageList = item.imageList
        this.swiperList = item.swiperList
      }
    });
   })
   }
 },
}
</script>

<style scoped>

</style>
