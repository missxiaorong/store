// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router' 
import VueResource from 'vue-resource'
import mint from 'mint-ui'
import { Checklist } from 'mint-ui';

Vue.component(Checklist.name, Checklist);

Vue.use(mint)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {

    }
  },
  router,

})
