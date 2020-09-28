import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '@/views/Cart.vue'
import Open from "@/views/Open.vue"
import Success from "@/views/Success.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Open',
    component: Open
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/success',
    name: "success",
    component: Success,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
