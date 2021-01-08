import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {}
  },
  mutations: {
    handleGetUserInfo(state, info) {
      state.userInfo = info
    }
  },
  actions: {
    GetUserInfo({ commit }) {
      axios
        .get('https://hirng-x2021.glitch.me/api/')
        .then(res => {
          const info = res.data
          console.log(info)
          commit('handleGetUserInfo', info)
        })
        .catch(e => {
          console.log(new Error(e))
          const info = undefined
          commit('handleGetUserInfo', info)
        })
    }
  }
})
