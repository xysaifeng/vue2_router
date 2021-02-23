<template>
  <div>
    props -data
  </div>
</template>

<script>
export default {
  props2: {
    id: { 
      type: String,
    }
  },
  props: [ 'name'],
  mounted() {
    console.log(this,'----this');
    console.log(this.$route);
  }
}
</script>


<style>

</style>