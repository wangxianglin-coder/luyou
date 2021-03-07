import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// js
//解决移动点击300ms
import FastClick from 'fastclick'
FastClick.attach(document.body)


// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)



// CSS
import './assets/css/reset.css'
import './assets/css/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
