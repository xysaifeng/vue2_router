<template>
<!-- 作用域插槽：使得组件在被使用时候可以访问组件内部的变量（内部作用域），而不是被使用环境（父作用域） -->
  <div>
      <!-- 不能绑定name 猜这是个关键字 -->
      <!-- <slot v-bind:name='info'>{{info.lastName}}</slot> -->
       
      <!-- <slot name='foo' v-bind:user='info'>{{info.lastName}}</slot> -->
      <!-- 不绑定user -->
      <slot name='foo'>{{info.lastName}}</slot>

      <!-- <slot v-bind:user='info'>{{info.lastName+'!'}}</slot> -->

      <!-- 动态属性 -->
      <slot v-bind:[name]='info'>{{info.lastName+'4!'}}</slot>
  </div>
</template>

<script>
export default {
    data() {
        return {
            info: {
                lastName: 'Tom',
                firstName: 'Jhon'
            },
            name: 'user'
        }
    }
}
</script>

<style>

</style>