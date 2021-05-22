<script>
import EleIsComp from './ElementIsComponent'
export default {
    components: {
        EleIsComp
    },
    props: {
        level: Number
    },
    render(h) {
        return h('ele-is-comp', {
            props: {
                
            },
            slot: 'foo'
        }, [this.$slots.foo, this.$slots.default])
    },
    render1(h) {
        console.log(1);
        return h('h'+ this.level, {
            props: {
                
            },
            slot: 'foo'
        }, [this.$slots.foo, this.$slots.default])
    }
}
</script>