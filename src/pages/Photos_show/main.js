import Vue from 'vue'
import App from './App.vue'

// BOOTSTRAP
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// FONT AWESOME
// TODO: Need to add fontawesome in js file
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faImage, faVideo, faCalendarAlt, faFileAlt, faTree, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome)
library.add(faImage)
library.add(faVideo)
library.add(faFileAlt)
library.add(faCalendarAlt)
library.add(faTree)
library.add(faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

console.log("Exit 1");

new Vue({
  render: h => h(App),
}).$mount('#app')
