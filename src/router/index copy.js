/**
 * router-alias的使用
 */

import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Root = { template: '<div>root</div>' }
const Home = Vue.extend({ template: '<div><h1>Home3</h1><router-view></router-view></div>' })
const Foo = Vue.extend({ template: '<div>fooe</div>' })
const Bar = Vue.extend({ template: '<div>bar</div>' })
const Baz = Vue.extend({ template: '<div>baz</div>' })
const Default = Vue.extend({ template: '<div>defaults</div>' })
const Nested = Vue.extend({ template: '<router-view/>' })
const NestedFoo = Vue.extend({ template: '<div>nested foo</div>' })

const routes = [
  { path: '/root', component: Root, alias: '/root-alias' },
  // { path: '/root', component: Root, alias: 'root-alias' },// alias没有‘/’开头会有警告
  {
    path: '/home', component: Home,
    children: [
      // absolute alias
      { path: 'foo', component: Foo, alias: '/foo' },
      // relative alias (alias to /home/bar-alias)
      { path: 'bar', component: Bar, alias: 'bar-alias' },
      // multiple aliases
      { path: 'baz', component: Baz, alias: ['/baz', 'baz-alias'] },
      // default child route with empty string as alias.
      { path: 'defaults', component: Default, alias: '' },
      // { path: 'defaults', component: Default, alias: '/' }, // 效果同上
      // nested alias
      {
        path: 'nested', component: Nested, alias: 'nested-alias',
        children: [
          { path: 'foo', component: NestedFoo }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  linkActiveClass: 'linkActiveClass' // 全局配置active-class
})

export default router
