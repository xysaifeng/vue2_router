<template>
  <!--<button type="submit">
      <slot>
          submit  后备内容 
      </slot>
  </button> -->
  <div>
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot name="default"></slot>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>