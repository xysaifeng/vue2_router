<template>
  <div>
      <slotc>
          <!-- sub -->
        <template #header>
            <h3>this is header</h3>
        </template>
        <!-- <template v-slot:header> 重复了
            <h4>this is header2</h4>
        </template> -->
        <!-- <p v-slot:header>ok</p> -->
       
        <template>
            <p>this is main</p>
        </template>
        
        <template #footer>
          <h3>this is footer</h3>
        </template>
         <p>this is main2</p>
      </slotc>
      <hr>
      <h3>作用域插槽</h3>
      <ScopeSlot>
        <!-- 当组件里的slot没有绑定user属性时，使用默认值 -->
       <!-- <template v-slot:foo='{user = {firstName: "guset" }}' >
        {{ user.firstName }}444
       </template>
      </ScopeSlot> -->

      <!-- 动态插槽名 -->
       <template v-slot:[name]='{user = {firstName: "guset" }}' >
        {{ user.firstName }}444
       </template>
      </ScopeSlot>

      <h3>独占默认插槽的缩写语法</h3>
      <scope-slot #default='{user}'>
       {{ user.firstName }}555
       <!-- <template v-slot> 
           hhh
       </template> -->
      </scope-slot>
      <hr>
      <demo :filterTodos='filterTodos'>
          <template #todo="{todos}">
              <span v-if='todos.isComplete'>√</span>
              <a href="#">
                  {{todos.text}}
              </a>
          </template>
      </demo>
  </div>
</template>

<script>
import slotc from './slotc'
import ScopeSlot from './scopeSlot'
import demo from './demo'
export default {
    components: {
        slotc,
        ScopeSlot,
        demo
    },
    data() {
        return {
            name:'foo',
            filterTodos: [
                {id: 0, text: '晨跑', isComplete: true},
                {id: 1, text: '早餐', isComplete: true},
                {id: 2, text: '学习', isComplete: false},
                {id: 3, text: '午餐', isComplete: false},
                {id: 4, text: '午休', isComplete: true},
            ]
        }
    }
}
</script>

<style>

</style>