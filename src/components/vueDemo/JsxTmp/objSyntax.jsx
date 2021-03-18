import './index.scss'

const ObjSyntax = {
    name: 'ObjSyntax',
    data() {
        return {
            name: '对象语法'
        }
    },

    render() {
        return <div class="obj">
            {this.name}
            <p class='pa'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut doloribus quaerat accusantium eveniet molestias neque, cumque aspernatur ex officiis, magnam eos quisquam ipsam modi maiores suscipit ullam sapiente? Aperiam.</p>
        </div>
    }
}
// 可以通过Vue.use(ObjSyntax)来注册全局组件
ObjSyntax.install = function(Vue) {
    // console.log(this, 7777);
    Vue.component(ObjSyntax.name, ObjSyntax)
}
export default ObjSyntax;