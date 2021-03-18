
{/* <script> */}

// 引入样式 同样生效
import './index.scss'
export default {
    data() {
        return {
            name: 'tom'
        }
    },
    render() {
        return <div class='wrapper'> {this.name }
        <p class='pp'>dsw</p></div>
    }
}


{/* <style lang='scss'>
    .wrapper {
        color: red;
        .pp {
            color: #000;
        }
    }
</style> */}

{/* </script> */}