<script>
import AnchoredUsed from './anchoredUsed'
export default {
    components: {
        AnchoredUsed
    },
  props: {
    value: String,
  },
  render2(h) {
    return h('input', {
        attrs: {
            value: this.value
        },
        domProps: {
    //   value: this.value
    },
        on: {
            input: e => {
                // console.log(e.target.value);
                // _this.$emit('input', e.target.value)
                this.$emit('update:value', e.target.value)
            }
        }
    })
  },

  data() {
      return {
          newTodoText: 'ok>',
          title: '你好'
      }
  },

  methods: {
      handleClick(e) {
        console.log(e.target.value);
      }
  },
    // vOn:click={this.newTodoText}
    // {...{ on: { click: item => this.$emit('click', item), 'update:openKeys': val => { this.localOpenKeys = val } } }}
  render(h) {
    //   ok
    //   return <input type="text" vOn:input={this.handleClick} value={this.value}/>
    // v-model
    //   return <input type="text" vOn:input={this.handleClick} vModel={this.newTodoText} />
    //   ok
    //   return <input type="text" onInput={this.handleClick} value={this.value}/>
    //   return <anchoredUsed {...{ on: { click: _ => { this.$emit('click', 45)}, 'update:openKeys': val => { this.localOpenKeys = val } } }} title='tomgo' />

    // return h('anchored-used', {
    //     props: {
    //         title: 'tomh'
    //     }
    // }, 'Nihao')
    return <AnchoredUsed title={this.title}>
        <div slot='foo'>this is slot</div>
    </AnchoredUsed>
  }
};
</script>
