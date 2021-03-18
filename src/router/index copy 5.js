/**
 * 滚动行为的使用
 */

// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'

// import InnerComponentGuard from '../components/Guard';
// import Home from '../components/Home';

Vue.use(VueRouter)

const Home = { template: '<div class="home">home</div>' }
const Foo = { template: '<div class="foo">foo</div>' }
const Bar = {
  template: `
    <div class="bar">
      bar
      <div style="height:1500px"></div>
      <p id="anchor" style="height:500px">Anchor</p>
      <p id="anchor2" style="height:500px">Anchor2</p>
      <p id="1number">with number</p>
    </div>
  `
}

const scrollBehavior = function (to, from, savedPosition) {
  console.log('savedPosition: --------', savedPosition);
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      console.log(to, '------to');
      // position.offset = { y: 10 }
      position.selector = to.hash

      // specify offset of the element
      if (to.hash === '#anchor2') {
        position.offset = { y: 350 }
      }

      // bypass #1number check
      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        console.log(position, 'position');
        return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    }

    console.log('------没有hash');

    return new Promise(resolve => {
      console.log(JSON.stringify(position), '-------position1');
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }

      // wait for the out transition to complete (if necessary)
      this.app.$root.$once('triggerScroll', () => {
        console.log(this, position, '------路由中的 this');
        // if the resolved position is falsy or an empty object,
        // will retain current scroll position.
        resolve(position)
      })
    })
  }
}
const routes = [
  { path: '/', component: Home, meta: { scrollToTop: true } },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar, meta: { scrollToTop: true } }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: __dirname,
  routes: routes,
  // linkActiveClass: 'linkActiveClass', // 全局配置active-class
  scrollBehavior
})
console.log(router, '----router');
export default router
