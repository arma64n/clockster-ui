import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import '@/assets/styles/dev.scss'

// import Components from './../dist/clockster.common'
// Vue.use(Components)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
