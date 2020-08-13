import Vue from 'vue'
import App from './App.vue'

// BOOTSTRAP
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faImage, faVideo, faCalendarAlt, faFileAlt, faTree } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome)
library.add(faImage)
library.add(faVideo)
library.add(faFileAlt)
library.add(faCalendarAlt)
library.add(faTree)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
