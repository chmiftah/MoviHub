import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  },

  {
    path: '/search/:query',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },

  {
    path: '/popular',
    name: 'Popular',
    component: () => import(/* webpackChunkName: "about" */ '../views/Popular.vue')
  }
  ,

  {
    path: '/tv',
    name: 'Tv',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tv.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "bg-gray-700 rounded-lg md:bg-gray-800 md:px-2 md:py-1",
  linkExactActiveClass:"bg-gray-700 rounded-lg md:bg-gray-0"

})

export default router
