import router from './router';

router.beforeEach((to, from, next) => {
  // console.log(to, '======to');
  // console.log(from, '======from');
  next()
})

router.beforeResolve((to, from , next) => {
  // console.log('---------beforeResolve');
  next()
})

router.afterEach((to, from) => {
  // console.log('---------afterEach');
  return to + from
})