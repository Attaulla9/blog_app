import Vue from 'vue'
import VueRouter from 'vue-router'
import blog from '../views/blog_list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'blog list',
    component: blog
  },
  {
    path: '/blog/:post',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/blog.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
