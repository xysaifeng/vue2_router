/**
 * 指令的使用
 */

import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'

import JsxTmp from '../components/vueDemo/JsxTmp/index';
// import Home from '../components/Home';

Vue.use(VueRouter)

import CustomDirective from '@/components/vueDemo/CustomDirective'
import Slot from '../components/slot'
import RenderFn from '../components/renderFn'

const routes = [
  { path: '/', component: CustomDirective, meta: { scrollToTop: true } },
  { path: '/slot', component: Slot, meta: { scrollToTop: true } },
  { path: '/jsx', component: JsxTmp, meta: { scrollToTop: true } },
  { path: '/renderFn', component: RenderFn, meta: { scrollToTop: true } }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: __dirname,
  routes: routes,
  // linkActiveClass: 'linkActiveClass', // 全局配置active-class
})
export default router
