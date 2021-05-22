<template>
  <div>
      <p class="el">元素是组件》</p>
      <Button type="primary">clikd</Button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue';
export default {
    components: {
        Button
    },
    props: {

    }
}

</script>


<style lang='less'>
    .el {
        display: -webkit-box;
        transform: translateX(5px);
    }
</style>