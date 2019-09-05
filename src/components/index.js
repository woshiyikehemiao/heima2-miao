import layoutAside from './layout-aside.vue'
import layoutHeader from './layout-header.vue'
import breadCrumb from './bread-crumb.vue'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)
    Vue.component('bread-crumb', breadCrumb)
  }
}
