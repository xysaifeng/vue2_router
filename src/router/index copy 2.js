// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutA from '../components/AboutA'
import AboutB from '../components/AboutB'

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
    path: '/about',
    name: 'About',
    props: true, // 开启 布尔模式，则route.params将被设置为组件的属性
    alias: '/bb',
    redirect: '/about/a',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: 'a',
        name: 'a',
        components: {
          default: AboutA,
          b: AboutB
        }
      }
    ]
  },
  {
    path: '/Todo',
    name: 'Todo',
    caseSensitive: false, // 开启后跳转路径将区分大小写
    props: { name: true }, // 开启 对象模式,会将name设置为组件属性。当props是静态的时候有用（如果没有在props中声明name属性，则name存在于$attrs对象中）
    component: () => import(/* webpackChunkName: "about" */ '../views/Todo')
  },
  {
    path: '/people',
    name: 'People',
    props: (route) => ({ query: route.query.age }), // 开启 函数模式,创建一个函数返回props，可以将静态值与基于路由的值结合等
    component: () => import(/* webpackChunkName: "about" */ '../views/People')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
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
