<template>
  <div class="city">
    <city-header class="header"></city-header>
    <scroll class="content" ref="scroll">
      <hot-city :hot-cities="hotCities"></hot-city>
      <city-sort :cities="cities" @changSort="changSort"></city-sort>
      <sort-city :cities="cities" ref="sort"></sort-city>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../scroll/Scroll'

import CityHeader from './pages/Header'
import HotCity from './pages/HotCity'
import CitySort from './pages/Sort'
import SortCity from './pages/SortCity'
import {Request} from '../../network/request'

export default {
  components: {
    CityHeader,
    HotCity,
    CitySort,
    SortCity,
    Scroll

  },
  data() {
    return {
      hotCities: [],
      cities: {}
    }
  },
  mounted() {
    Request({
      type:'GET',
      url:'./data/city.json'
    }).then(res => {

     const data = res.data.data
     console.log(data)
     this.hotCities = data.hotCities
     this.cities = data.cities
    })
  },
  methods: {
    changSort(key){
      // 监听位置
    // this.$refs.scroll.scroll.scrollToElement(this.$refs.sort.$refs[key][0],200)
    this.$refs.scroll.scrollTo(this.$refs.sort.$refs[key][0],200)
    }
  },
}
</script>

<style scoped>
.city{
  position: relative;
  height: 100vh;
}
.header{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9;
}
.content{
  position: absolute;
  top: 1.3rem;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
