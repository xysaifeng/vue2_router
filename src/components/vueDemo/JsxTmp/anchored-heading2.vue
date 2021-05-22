<script>
const getChildrenTextContent = function(vnode) {
    // console.log('vnode: ', vnode);
    return vnode.map(node => {
        return node.children ? getChildrenTextContent(node.children) : node.text
    }).join('')

}
export default{
    props: {
        level: {
            type: Number,
            default: 1,
            required: true
        }
    },
    /* <h1>
        <a name="hello-world" href="#hello-world">
            Hello world!
        </a>
        </h1>
    */
    render3(c) {
        let res = getChildrenTextContent(this.$slots.default)
        // console.log('res:--', res); //  hello worldgood
        let res2 = res.toLowerCase().replace(/\W/g, '-').replace(/^-|-$/g, '')
        // console.log(res2,22);
        return c('h'+this.level, [
            c('a', {
            attrs: {
                href: '#' + res2,
                name: res2
            }
        }, this.$slots.default)
        ])
    },
    render2(h) { // ok
        let p = h('p', 'hi');
        return (
          h('div', [
              p,
              p,
              p,
              p,
          ])
        )
    },
    render(h) {
        return (
          h('div', new Array(4).fill().map( () => h('p', 'hi')))
        )
    }
}
</script>
