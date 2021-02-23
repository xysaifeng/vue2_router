// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
// import PropData from '../components/props-data/PropsData'

// redirect的使用

Vue.use(VueRouter)

const Home = { template: '<router-view></router-view>' }
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
    { path: '/foobar', component: Foobar, caseSensitive: true },

    // redirect with pathToRegexpOptions
    { path: '/FooBar', component: FooBar, pathToRegexpOptions: { sensitive: true }},

    // catch all redirect
    { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  linkActiveClass: 'linkActiveClass' // 全局配置active-class
})
console.log(router, '----router');
export default router
