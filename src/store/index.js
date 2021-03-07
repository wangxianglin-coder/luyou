import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '茂名'
defaultCity = localStorage.city
 const state = {
  city: defaultCity
 }
 const mutations = {
   changCity(state,val){
   state.city = val
   localStorage.city = val
   }
 }
const store = new Vuex.Store({
  state,
  mutations,
})
export default store
