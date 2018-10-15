import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Login from './views/Login.vue'
// @ts-ignore
import Vaults from './views/Login.vue'
// @ts-ignore
import Keep from './views/Login.vue'
// @ts-ignore
import Vault from './views/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/vaults',
      name: 'vaults',
      component: Vaults
    },
    {
      path: '/vault',
      name: 'vault',
      component: Vault
    },
    {
      path: '/keep',
      name: 'keep',
      component: Keep
    }
  ]
})
