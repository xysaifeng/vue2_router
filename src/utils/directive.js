import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'

Vue.directive('auto-focus', {
    // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    bind: function () {
        console.log(arguments, '----bind');
    },
    // 当被绑定的元素插入到 DOM 中时……
    // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    inserted: function (el) {
        console.log(arguments, '----inserted');
        el.focus()
        // 组件中使用
        el.classList.add('add')
    },
    update: function () {
        console.log(arguments, '----update');
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    componentUpdated: function () {
        console.log(arguments, '----componentUpdated');
    },
    // 只调用一次，指令与元素解绑时调用。
    unbind: function () {
        console.log(arguments, '----unbind');
    }
})

Vue.directive('auto-focus2', function(el, binding) {
    // console.log(arguments, '-------');
    console.log(binding);
    console.log(el);
    el.focus() // 不生效
})