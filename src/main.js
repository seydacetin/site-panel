import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import DatetimePicker from 'vuetify-datetime-picker'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'

Vue.config.productionTip = false
Vue.use(DatetimePicker)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
