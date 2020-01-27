import Vue from 'vue'
import App from './App.vue'
// require('dotenv').config()
require('../key.js')

export const eventBus = new Vue();

Vue.config.productionTip = false
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: key,
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})
new Vue({
  render: h => h(App),
}).$mount('#app')
