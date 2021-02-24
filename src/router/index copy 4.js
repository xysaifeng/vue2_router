/**
 * redirect的使用
 */

// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
// import PropData from '../components/props-data/PropsData'
 

import InnerComponentGuard from '../components/Guard';
import Home from '../components/Home';

Vue.use(VueRouter)

// const Home = { template: '<router-view></router-view>' }
const Default = { template: '<h3>default</h3>' }
const Foo = { template: '<h3>foo111</h3>' }
const Bar = { template: '<h3>bar-bar</h3>' }
const Baz = { template: '<h3>baz</h3>' }
const WithParams = { template: '<h3>{{ $route.params.id }}</h3>' }
const Foobar = { template: '<h3>foobar</h3>' }
const FooBar = { template: '<h3>FooBar</h3>' }

const routes = [
  { path: '/', component: Home,
      children: [
        { path: '', component: Default },
        { path: 'foo', component: Foo },
        { path: 'bar', component: Bar },
        { path: 'baz', name: 'baz', component: Baz },
        { path: 'with-params/:id', component: WithParams },
        // relative redirect to a sibling route
        { path: 'relative-redirect', redirect: 'foo' }
      ]
    },
    // absolute redirect
    { path: '/absolute-redirect', redirect: '/bar' },
    // dynamic redirect, note that the target route `to` is available for the redirect function
    { path: '/dynamic-redirect/:id?',
      redirect: to => {
        const { hash, params, query } = to
        if (query.to === 'foo') {
          return { path: '/foo', query: null }
        }
        if (hash === '#baz') {
          return { name: 'baz', hash: '' }
        }
        if (params.id) {
          console.log(params.id, '------/dynamic-redirect/');
          return '/with-params/:id'
        } else {
          return '/bar'
        }
      }
    },
    // named redirect
    { path: '/named-redirect', redirect: { name: 'baz' }},

    // redirect with params
    { path: '/redirect-with-params/:id', redirect: '/with-params/:id' },

    // redirect with caseSensitive
    { path: '/foobar', component: Foobar, caseSensitive: true, beforeEnter: (to, from, next) => {
      console.log(to, '--to before enter');
      console.log(from, '--from before enter');
      next()
    } },

    // redirect with pathToRegexpOptions
    { path: '/FooBar', component: FooBar, pathToRegexpOptions: { sensitive: true }},


    { path: '/innerGuard', component: InnerComponentGuard, pathToRegexpOptions: { sensitive: true },  beforeEnter: (to, from, next) => {
      console.log(to, '--to before enter');
      console.log(from, '--from before enter');
      next()
    }},

    // catch all redirect
    { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  linkActiveClass: 'linkActiveClass', // 全局配置active-class
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    console.log(savedPosition, '--------------savedPosition');
    // return {
    //   x: 0,
    //   y: 0,
    //   behavior: 'smooth',
    // }

    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { x: 0, y: 0 ,behavior: 'smooth'}
    // }
    
    // 如果返回一个falsy值或者一个空对象，那么不会发生滚动。换句话说，浏览器会保持在当前的滚动位置
    return false;

    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve({x: 0, y:200 })
    //   }, 100)
    // })
  }
})
console.log(router, '----router');
export default router
