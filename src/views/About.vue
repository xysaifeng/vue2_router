<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-view></router-view>
    <router-view name='b'></router-view>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: {
      name: {
         type: String,
          required: false,
          default: 'to'
      }
    },
  data() {
    return {
      s: 'ss'
    }
  },
  mounted() {
    console.log(this.name, '------name');// tom 因为route开启了布尔模式
  }
}
</script>