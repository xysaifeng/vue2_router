<template>
  <div>
      <h3>need todo</h3>
        <title-com v-bind.sync="list"></title-com>
  </div>
</template>

<script>
import TitleCom from '@/components/Title'

export default {
    name: 'todo',
    components: {
        TitleCom
    },
    props: {
        name:{
            type: Boolean
        }
    },
    data() {
        return {
            list: {
                t: 'hello',
                s: 'world'
            }
        }
    },
    methods: {
        updateTitle() {

        }
    },
    mounted() {
        console.log(this, '----this');
    }
}
</script>

<style>

</style>