import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LayoutView from '../components/@Shard/Layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: LayoutView,
    children:[
      {
        path: 'profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
        meta: {
            requiresAuth: true
        }
      },
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
        meta: {
            requiresAuth: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
