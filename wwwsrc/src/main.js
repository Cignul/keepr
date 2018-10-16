import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import store from './store'
// import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
