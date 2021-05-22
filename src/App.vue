<template>
  <div id="app">
    <h1>自定义指令</h1>
    <ul class="nav">
      <li><router-link to="/">/home</router-link></li>
      <li><router-link to="/slot">/slot</router-link></li>
      <li><router-link to="/jsx">/Jsx</router-link></li>
      <li><router-link to="/renderFn">/renderFn</router-link></li>
    </ul>
    <transition name="fade" mode="out-in" @after-leave="afterLeave">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    var s = 1;
  },

  methods: {
    go() {
      this.$router.push({ name: "About", params: { name: "tom" } });
    },
    goPeople() {
      this.$router.push({ path: "/people", query: { age: "jack" } });
    },
    afterLeave() {
      // console.log(this, '--------组件this');
      this.$root.$emit("triggerScroll");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .nav {
    margin: 0;
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      padding: 0 20px;
      // list-style: none;
    }
  }
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
