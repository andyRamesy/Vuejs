<template>
    <footer>
       <p> {{cr}} {{title}}</p>     
    </footer>
</template>

<script>
import {bus} from "../main.js";


export default {
    props : {
        title : {
            type : String
        }
    },
    data() {
        return {
            cr : "Copyright"
        }
    },
    created(){
        bus.$on("titleChanged", (data) => {
            this.title = data;
        })
    }
}
</script>

<style scoped lang="scss">
    footer{
        background: #3F3F3F;
        padding : 10px;
    }
    p{
        color: #bbffbb;
        text-align: center;
    }
</style>