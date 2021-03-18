<template>
  <div>
      <ObjSyntax></ObjSyntax>
      <br>
      <JsxTm></JsxTm>
      <br>
      <AnchoredHeading :level='3'>
        <a href="#">ok</a>
        <template v-slot:foo>
            <div>ok?</div>
        </template>
      </AnchoredHeading>


      <wrapper>
          <AnchoredHeading slot="wrapperIn"></AnchoredHeading>
      </wrapper>

      <br>
    <AnchoredHeading2 :level='3'>
        <p> hello world</p>
        <p> good </p>
    </AnchoredHeading2>
    <hr>
    <v-model-achieve :value.sync='text' @click="handleClick"></v-model-achieve>
    <!-- <v-model-achieve :value='text' @input="handelInput"></v-model-achieve> -->

  </div>
</template>

<script>
import JsxTm from './JsxTm'
import AnchoredHeading from './anchored-heading'
import AnchoredHeading2 from './anchored-heading2'
import VModelAchieve from './v-model-achieve'
import wrapper from './wrapper'
export default {

    components: {
        JsxTm,
        AnchoredHeading,
        AnchoredHeading2,
        wrapper,
        VModelAchieve
    },
    data() {
        return {
            text: 'mayih'
        }
    },

    methods: {
        handelInput(val) {
            console.log(val, '------inu');
        },
        handleClick(e) {
            console.log(e);
        }
    },

    watch: {
        text(val) {
            console.log(val, '------val');
        }
    }

}
</script>

<style>

</style>