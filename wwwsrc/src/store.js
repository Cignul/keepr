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
    keeps: [],
    vaults: [],
    vaultKeeps: [],
    vaultId: "",
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
    setVaultKeeps(state, vaultKeeps) {
      state.vaultKeeps = vaultKeeps
    },
    deleteVault(state, vaultId) {
      state.vaultId = vaultId
    },
    incrementKeeps(keep) {

    },
  },
  actions: {
    // KEEP STUFF  
    getAllKeeps({ commit, dispatch }) {
      api.get('keeps')
        .then(res => {
          commit('setKeeps', res.data)
        })
    },
    getAllVaultKeeps({ commit, dispatch }, data) {
      api.get('vaultKeeps/' + data)
        .then(res => {
          commit('setVaultKeeps', res.data)
        })
    },

    createKeep({ commit, dispatch }, Keep) {
      api.post('keeps', Keep)
        .then(res => {
          dispatch('getAllKeeps')

        })
      //this might need help i'm having trouble creating, hitting 401 on post in postman but gets returns []
    },
    createVaultKeep({ commit, dispatch }, data) {
      api.post('vaultkeeps', data)
        .then(data => {
          commit('setVaultKeeps')

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
    // route not found
    addToVault({ commit, dispatch }, vaultId) {
      api.put('keeps', vaultId)
        .then(res => {
          commit('keep', vaultId)
        })
    },

    deleteVault({ commit, dispatch }, vaultId) {
      api.delete('vaults/' + vaultId)
        .then(res => {
          dispatch('getVaultsByUserId')
        })
        .catch(e => {
          console.log('error:', e)
        })
    },






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