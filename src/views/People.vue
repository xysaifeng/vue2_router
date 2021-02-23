<template>
  <div>
    个人中心
  </div>
</template>

<script>
export default {
    name: 'people',
    props: {
        query: {
            type: String
        }
    },
    mounted() {
        console.log(this, '----people');
    }
}
</script>

<style>

</style>