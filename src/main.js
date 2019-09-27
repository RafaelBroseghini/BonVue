import Vue from 'vue'
import App from '@/app'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.component('scale-loader', require('vue-spinner/src/ScaleLoader.vue').default);
