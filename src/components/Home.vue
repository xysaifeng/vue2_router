<template>
  <div>
    <h3>home</h3>
    <div class="container">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeRouteUpdate(to, from, next) {
      console.log('------update');
      next()
    },
}
</script>

<style lang='scss'>
  .container {
    .box {
      width: 100%;
      height: 200px;
      border: 1px solid red;
    }
  }
</style>