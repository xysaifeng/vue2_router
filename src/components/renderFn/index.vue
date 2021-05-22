<template>
  <div>
      <HeaderLink :level='3'>
          <template v-slot:foo>
              ok>
          </template>
          <p>no----</p>
      </HeaderLink>
  </div>
</template>

<script>
import HeaderLink from './HeaderLink'
export default {
    components: {
        HeaderLink
    }
}
</script>

<style>

</style>