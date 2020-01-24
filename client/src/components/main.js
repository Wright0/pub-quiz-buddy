import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAtTmi7K5DkqGml9K3bkIh074vptABFzXM',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
