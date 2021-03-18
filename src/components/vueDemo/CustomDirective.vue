<template>
  <div>
      <label for="name">
          <!-- 姓名：<input type="text" @change='change' id='name' :value="name" v-auto-focus:edit.a.b='4+1'> -->
          <!-- 姓名：<input type="text" @change='change' id='name' :value="name" v-auto-focus:edit.a.b='good'> -->
          <!-- 姓名：<input type="text" @change='change' id='name' :value="name" v-auto-focus:edit.a.b='info'> -->
          姓名：<input type="text" @change='change' id='name' :value="name">
      </label>
      <br>
      <label for="age">
          <!-- 姓名：<input type="text" @change='change' id='name' :value="name" v-auto-focus:edit.a.b='4+1'> -->
          <!-- 姓名：<input type="text" @change='change' id='name' :value="name" v-auto-focus:edit.a.b='good'> -->
          <!-- 姓名：<input type="text" @change='change' id='name' :value="name" v-auto-focus:edit.a.b='info'> -->
          年龄：<input type="text" id='age' ref='age'>
      </label>
      <br>
      <!-- 指令用在组件上 -->
    <JsxTm v-auto-focus:edit.a.b='info'></JsxTm>
  </div>
</template>

<script>
import JsxTm from './JsxTmp/JsxTm'
export default {
    customOption: {ok: 'no'},
    components: {
        JsxTm
    },
    data() {
        return {
            name: '',
            good: '666',
            info: {
                name: '张三丰',
                age: 120
            }
        }
    },

    mounted() {
        console.log(this.$refs.age);
        this.$refs.age.focus()
       this.$nextTick(() => {
            // this.$refs.age.focus()
       })
    },

    methods: {
        change(e) {
            console.log(this);
            console.log(e.target.value, '----e.target.value');
            this.name = e.target.value + "?"
        }
    }
}
</script>

<style>

</style>