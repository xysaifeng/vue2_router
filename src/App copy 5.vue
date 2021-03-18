<template>
  <div id="app">
    <h1>滚动行为使用方式 scroll behavior</h1>
    <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
        <li><router-link to="/bar#anchor">/bar#anchor</router-link></li>
        <li><router-link to="/bar#anchor2">/bar#anchor2</router-link></li>
        <li><router-link to="/bar#1number">/bar#1number</router-link></li>
      </ul>
    <transition name="fade" mode="out-in" @after-leave="afterLeave">
       <router-view class="view"></router-view>
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
      },
      afterLeave () {
        console.log(this, '--------组件this');
        this.$root.$emit('triggerScroll')
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
