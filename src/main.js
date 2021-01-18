import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import YmapPlugin from 'vue-yandex-maps'

Vue.use(YmapPlugin, {
  apiKey: '385bdb52-9c48-4ef5-b276-6cba55ea9c80',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
