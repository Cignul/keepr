import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:5000/account/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: "//localhost:5000/api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    keeps: {},
    vaults: [],
    vaultKeeps: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setKeeps(state, keeps) {
      state.keeps = keeps;
    },
    setVaults(state, vaults) {
      state.vaults = vaults;
    },
    setVaultKeeps(state, data) {
      state.vaultKeeps = data
    }
  },
  actions: {
    // KEEP STUFF  
    getAllKeeps({ commit, dispatch }) {
      api.get('keeps')
        .then(res => {
          commit('setKeeps', res.data)
        })
    },
    getAllVaultKeeps({ commit, dispatch }) {
      api.get('vaultKeeps')
        .then(res => {
          commit('setKeeps', res.data)
        })
    },

    createKeep({ commit, dispatch }, Keep) {
      api.post('keeps', Keep)
        .then(res => {
          dispatch('getAllKeeps')

        })

    },
    //Vault stuff
    getAllVaults({ commit, dispatch }) {
      api.get('vaults')
        .then(res => {
          commit('setVaults', res.data)
        })
    },
    createVault({ commit, dispatch }, Vault) {
      api.post('vaults', Vault)
        .then(res => {
          dispatch('getAllVaults')

        })
    },
    //need to add delete vault method here





    getVaultKeeps({ commit, dispatch }, vaultId) {
      api.get('vaults/keeps/' + vaultId)
        .then(res => {
          commit('setVaultKeeps', res.data)
        })
    },





    //user auth stuff
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('[registration failed] :', e)
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          dispatch("getAllVaults")
          router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('not authenticated')
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          dispatch("getAllVaults")
          router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('Login Failed')
        })
    }
  }
})