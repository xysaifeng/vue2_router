
<script>
export default {
    data() {
        return {
            name: 'this is render'
        }
    },
    render() {
        console.log(arguments, '------args');
        return <div class='wrapper'> {this.name }
        <p class='pp'>ds</p></div>
    }
}
</script>

<style lang='scss'>
    .wrapper {
        color: red;
        .pp {
            color: #000;
        }
    }
</style>

