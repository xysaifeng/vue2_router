import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
// import router from './router/index copy'
import router from './router'
import store from './store'

import './permission';
import './utils/directive'
import ObjSyntax from '@/components/vueDemo/JsxTmp/objSyntax'

Vue.use(ObjSyntax);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
