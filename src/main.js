import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/common.css'
import Websocket from "@/components/Websocket";

Vue.config.productionTip = false
Vue.component("Websocket", Websocket)


router.beforeEach((to, from, next) => {
  if (next.name != 'Cart') {
    window.onscroll = null;
  }
  next();
});

router.afterEach(() => {})


new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  },
}).$mount('#app')
