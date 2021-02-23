// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PropData from '../components/props-data/PropsData'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/prop-data/:id',
    // props: true,
    // props: {name: 'tom'},
    // eslint-disable-next-line no-unused-vars
    props: function(route) {
      console.log(arguments, '----route88');
      return { name: 'jack'}
    },
    name: 'propData',
    // component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
    component: PropData
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  linkActiveClass: 'linkActiveClass' // 全局配置active-class
})
console.log(router, '----router');
export default router
