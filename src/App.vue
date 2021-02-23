<template>
  <div id="app">
    <h1>redirect使用方式</h1>
    <ul>
        <li><router-link to="/relative-redirect">
          /relative-redirect (redirects to /foo)
        </router-link></li>
        <li><router-link to="/relative-redirect?foo=bar">
          /relative-redirect?foo=bar (redirects to /foo?foo=bar)
        </router-link></li>
        <li><router-link to="/absolute-redirect">
          /absolute-redirect (redirects to /bar)
        </router-link></li>
        <li><router-link to="/dynamic-redirect">
          /dynamic-redirect (redirects to /bar)
        </router-link></li>

        <li><router-link to="/dynamic-redirect/123">
          /dynamic-redirect/123 (redirects to /with-params/123)
        </router-link></li>

        <li><router-link to="/dynamic-redirect?to=foo">
          /dynamic-redirect?to=foo (redirects to /foo)
        </router-link></li>

        <li><router-link to="/dynamic-redirect#baz">
          /dynamic-redirect#baz (redirects to /baz)
        </router-link></li>
        
        <li><router-link to="/named-redirect">
          /named-redirect (redirects to /baz)
        </router-link></li>
        <li><router-link to="/redirect-with-params/123">
          /redirect-with-params/123 (redirects to /with-params/123)
        </router-link></li>
        <li><router-link to="/foobar">
          /foobar
        </router-link></li>
        <li><router-link to="/FooBar">
          /FooBar
        </router-link></li>
        <li><router-link to="/not-found">
          /not-found (redirects to /)
        </router-link></li>
      </ul>
    <transition name="fade" mode="out-in">
      <!-- <keep-alive> -->
        <router-view />
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
export default {
    name: 'app',
    methods: {
      go() {
        this.$router.push({name: 'About', params: {name: 'tom'}})
      },
      goPeople() {
        this.$router.push({path: '/people', query: {age: 'jack'}})
      }
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .router-link-exact-active {
    color: #42b983;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
