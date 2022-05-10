<template>
    <header>
        <h1 @click="changeTitle">{{title}}</h1>
    </header>
</template>

<script>
import {bus} from "../main.js";


export default {
    props:{
        title :{
            type : String
        }
    },
    data(){
        return{
            //title : "VUe JS"
        }
    },
    methods: {
       changeTitle(){
            // this.title = "title changed"
            // this.$emit("changeTitle", "vue wiz")
            this.title = "vue wizards"
            bus.$emit("titleChanged" , "vue vowizard")
        }
    },
}
</script>

<style scoped>
    header{
        background: #99fa99;
        padding: 10px;
    }
    h1{
        color : #441717;
        text-align: center;
    }
</style>