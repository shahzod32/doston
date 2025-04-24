import { createRouter, createWebHistory } from 'vue-router'
import Ovqatlar      from '@/companents/Ovqat.vue'
import Ichimliklar   from '@/companents/ichimliklar.vue'
import Shirinliklar  from '@/companents/shirinliklar.vue'
import Pizza         from '@/companents/pizza.vue'
import Cart          from '@/views/Cart.vue'

const routes = [
  { path: '/',           redirect: '/ovqatlar' },
  { path: '/ovqatlar',   component: Ovqatlar },
  { path: '/ichimliklar',component: Ichimliklar },
  { path: '/shirinliklar', component: Shirinliklar },
  { path: '/pizza',      component: Pizza },
  // Mana bu yerga props: true qo‘shamiz
  { path: '/cart',       component: Cart, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
