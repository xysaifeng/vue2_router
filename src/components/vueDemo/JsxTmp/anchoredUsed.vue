<template>
  <div v-on="$listeners">used --- {{this.title}}
      <slot name="foo"></slot>
  </div>
</template>

<script>
export default {
    props: {
        title: String
    },
    mounted() {
        console.log(this , '------ds');
    }
}
</script>

<style>

</style>