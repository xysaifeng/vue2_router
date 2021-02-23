<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home" exact>Home</router-link> |
      <!-- <router-link to="/about">about</router-link> | -->
      <span @click="go">about</span> |
      <router-link to="/todo">todo</router-link> |
      <a @click="goPeople">people</a> |
      <!-- 导航后不会留下 history 记录。 -->
      <!-- <router-link to="/about" replace>about</router-link> -->
      <!-- <router-link :to="{path: '/about', query: {a:'as'}}">about</router-link> -->
      <!-- <router-link :to="{path: 'about'}">about</router-link> -->
      <!-- <router-link :to="{path: '/about'}">about</router-link> -->
      <!-- <router-link :to="'about'">about</router-link> -->

      <!-- <router-link to="/about" v-slot="{href, route, navigate, isActive, isExactActive}">
        <li 
          :class="[isActive && 'is-active', isExactActive && 'router-link-exact-active']"
        >
          <a :href="href" @click="navigate">{{route.fullPath}}</a>
        </li>
      </router-link> -->

      <router-link to="/news" :event="['mouseenter']" append tag="span"
        >news</router-link
      >
      <!-- 可以通过路由构造选项的linkActiveClass来全局配置 -->
      <!-- <router-link to="/news" active-class='active-class' append tag='span'>news</router-link> -->
    </div>
    <transition name="fade" mode="out-in">
      <!-- <keep-alive> -->
        <router-view class="view" foo="123" />
        <router-view name='news' />
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
