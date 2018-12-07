// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VeeValidate from 'vee-validate' // form validation
import router from './router'
import ToggleButton from 'vue-js-toggle-button' // toggle button

Vue.use(ToggleButton)
Vue.use(VeeValidate)
Vue.config.productionTip = false

export const store = new Vuex.Store({}) // vuex store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
