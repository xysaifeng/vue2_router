<template>
  <div id="app">
    <h1>props-data的三种传递方式</h1>
    <div id="nav">
      <router-link to="/home" exact>Home</router-link> |
      <router-link to="/prop-data/13">prop-data</router-link> |
    </div>
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
