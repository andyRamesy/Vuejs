<template>
    <div id="list">
        <ul  v-for="ls in list" :key="ls.name" @click="ls.show=!ls.show">
            <li v-for="ls2 in list2" :key="ls2">
                <h2>{{ls.name}} {{ls2}}</h2>
                <h3 v-show="ls.show">{{ls.speciality}}</h3>
            </li>
        </ul>
        <button @click="deleteElement">delete</button>
    </div>
</template>

<script>
export default {
    // props:["list","list2"],
    props: {
        list:{
            type : Array,
        },
        list2:{
            type : Array
        }
    },
    data(){
        return{
            
        }
    },
    methods: {
        deleteElement: function(){
            this.list.pop();
        }
    },
    //
    // beforeCreate(){
    //     alert("beforeCreate")
    // },
    // created(){
    //     alert("created")
    // },
    // beforeMount(){
    //     alert("beforeMount")
    // },
    // mounted(){
    //     alert("mounted")
    // },
    // beforeUpdate(){
    //     alert("beforeUpdate")
    // },
    // updated(){
    //     alert("updated")
    // },
    // beforeUnmount(){
    //     alert("beforeUnmount")
    // },
    // unmounted() {
    //     alert("unmounted")
    // },

}
</script>

<style scoped lang="scss">
   #list{
       width:100%;
       max-width: 1200px;
       margin:40px auto;
       padding:0 20px;
       box-sizing: border-box;
   }
   ul{
       display:flex;
       flex-wrap: wrap;
       list-style-type:none;
       padding: 0;
   }
   li{
       flex-grow: 1;
       flex-basis: 300px;
       text-align: center;
       padding: 30px;
       border: 1px solid #222;
       margin: 10px;
   }
</style>