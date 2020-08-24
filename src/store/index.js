import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {        //全局状态
    userInfo:{}
  },
  mutations:{
    SaveUserInfo(state,user){
      state.userInfo=user
    },
    ClearState(state){
      state.userInfo={}
    },
  },
  getters:{
    getUserInfo(state){
      return state.userInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
