<template>
  <div>
    <h3>组件内的守卫</h3>
    <ol>
      <li>1.beforeRouteEnter</li>
      <li>2.beforeRouteUpdate</li>
      <li>3.beforeRouteLeave</li>
      <li>4.{{title}}</li>
    </ol>
    <div class="container">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, '-----beforeRouteEnter to');
    console.log(from, '-----beforeRouteEnter from');

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      console.log(json, '6666')
      next(function(vm) {
        console.log('最后执行cb');
        vm.setData(json)
      })
    })

    
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, '-----beforeRouteUpdate to');
    console.log(from, '-----beforeRouteUpdate from');
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, '-----beforeRouteLeave to');
    console.log(from, '-----beforeRouteLeave from');
    next()
  },
  methods: {
    setData(data) {
      this.title = data.title;
    }
  }
}
</script>

<style scoped lang='scss'>
  .container {
    .box {
      width: 100%;
      height: 200px;
      border: 1px solid red;
    }
  }

</style>