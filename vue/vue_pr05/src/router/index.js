import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Params from '../views/Params.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/params/:name/:age',
    name: 'params',
    props: true,
    component: Params
    // param 사용하려면 와이들카드 사용.
    // props 사용하려면 props: true 해줘야 한다.
  },
  {
    path: '/Query',
    name: 'Query',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Query.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
