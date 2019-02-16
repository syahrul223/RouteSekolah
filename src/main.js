import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Argon from '@/plugins/argon-kit'

Vue.use(Argon);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router : Router
}).$mount('#app')
