<script>
// import anchoredUsed from "./anchoredUsed";

// async function fn() {
//   return Promise.resolve("h2");
// }

export default {
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  data() {
    this.info = {
      name: "tom",
    };
    return {
      info2: {
        name: "tom",
      },
      name: "jack",
    };
  },
  methods: {
    handleClcik() {
      console.log(7777);
    },
  },
  // @returns {VNode}
  render(c) {
    // console.log(arguments, '---argsss');
    console.log(this, "this.$slots");
    // return c('div', {props: {class: 'ds'}, attrs: {id: '32s'}}, 333)
    // return c('h'+this.level, {props: {class: 'ds'}, attrs: {id: '32s'}}, this.$slots.default)
    // return c('h'+this.level, {props: {class: 'ds'}, attrs: {id: '32s'}}, this.$slots.foo)
    // return c('h'+this.level, this.name)
    // return c('h'+this.level, this.info) // 不显示

    // return c(anchoredUsed, this.name) // 组件渲染了 this.name被忽略了
    // return c(fn, {}, this.name) // 报错 ？？？
    // return c('div', {props: {a: 13}}, ['first', c('h1', '一则头条'),c(anchoredUsed, {props: {
    //     title: 'this is title'
    // }})])

    // 第二个参数
    return c(
      "div",
      // anchoredUsed,
      {
        // 'class': 'foo'
        // 'class': 'foo bar'
        // 'class': ['foo', 'bar', 'list']
        class: { bar: true, foo: true },
        // 'style': 'color: red'
        // 'style': {
        //     color: 'red',
        //     fontSize: '20px'
        // }

        style: [{ color: "red" }, { fontWeight: "bold" }],

        // 普通的 HTML attribute
        attrs: {
          id: "oks",
        },
        // 组件 prop
        props: {
          myProp: "bar",
          title: "头疼",
        },
        // DOM property
        domProps: {
          //   innerHTML: "baz",
        },
        // 事件监听器在 `on` 内，
        // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
        // 需要在处理函数中手动检查 keyCode。
        on: {
          click: this.handleClcik,
        },
        // 仅用于组件，用于监听原生事件，而不是组件内部使用
        // `vm.$emit` 触发的事件。
        // nativeOn:  {
        //     click: this.handleClcik
        // },
        scopedSlots: {
          default: (props) => {
               console.log(props, '-------poooo');
              return c("span", props.text)
          },
          ['name-of-slot']: (props) => {
               console.log(props, '-------22');
              return c("span", props.text)
          },
        },
        // 如果组件是其它组件的子组件，需为插槽指定名称
        slot: 'wrapperIn',
      },
      this.name
    );
  },
};
</script>

<style>
</style>