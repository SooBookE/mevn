import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ex1',
    name: 'ex_1',
    component: () => import(/* webpackChunkName: "ex" */ '../views/ex_1.vue')
  },
  {
    path: '/ex2',
    name: 'ex_2',
    component: () => import(/* webpackChunkName: "ex" */ '../views/ex_2.vue')
  },
  {
    path: '/ex3',
    name: 'ex_3',
    component: () => import(/* webpackChunkName: "ex" */ '../views/ex_3.vue')
  },
  {
    path: '/ex4',
    name: 'ex_4',
    component: () => import(/* webpackChunkName: "ex2" */ '../views/ex_4.vue')
  },
  {
    path: '/ex5',
    name: 'ex_5',
    component: () =>
      import(
        /* webpackChunkName: "ex2" , webpackPrefetch: true */ '../views/ex_5.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
