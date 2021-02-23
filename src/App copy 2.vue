<template>
  <div id="app">
    <h1>Route Alias的使用</h1>
    <ul id="nav">
      <li>
        <router-link to="/root-alias">
          /root-alias (renders /root)
        </router-link>
      </li>
      <li><router-link to="/foo"> /foo (renders /home/foo) </router-link></li>
      <li>
        <router-link to="/home/bar-alias">
          /home/bar-alias (renders /home/bar)
        </router-link>
      </li>
      <li><router-link to="/baz"> /baz (renders /home/baz) </router-link></li>
      <li>
        <router-link to="/home/baz-alias">
          /home/baz-alias (renders /home/baz)
        </router-link>
      </li>
      <li>
        <router-link to="/home"> /home (renders /home/default) </router-link>
      </li>
      <li>
        <router-link to="/home/nested-alias/foo">
          /home/nested-alias/foo (renders /home/nested/foo)
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

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
