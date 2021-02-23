<template>
  <div>
    {{$attrs.t}}--{{$attrs.s}}
    <br>
    <input type="text" @change="handleClick">
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  mounted(){
    console.log(this, '00099');
  },
  methods: {
    handleClick(e) {
      console.log(e.target.value);
      this.$emit('update:t',  e.target.value)
      // this.$emit('update:s',  e   .target.value + 2)
    }
  }
}
</script>

<style>

</style>