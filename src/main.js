import Vue from 'vue'
import App from './App.vue'
import './assets/styles/ui.scss'
import './assets/styles/variables.scss'
import './plugin'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
