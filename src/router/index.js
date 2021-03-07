import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../components/home/Home')
const City = () => import('../components/city/City')
const Detail = () => import('../components/detail/Detail')
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/detail',
      component: Detail
    }
]
const router = new VueRouter({
    routes
})

export default router
