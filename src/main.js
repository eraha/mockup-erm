import Vue from 'vue'
import VueSignaturePad from 'vue-signature-pad'
import App from './App.vue'


import './assets/styles/index.css'

Vue.config.productionTip = false
Vue.use(VueSignaturePad)

new Vue({
  render: h => h(App),
}).$mount('#app')
