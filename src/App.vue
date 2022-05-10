<template>
  <div>
    <app-header
      v-bind:title="title"
      @changeTitle="updateTitle($event)"
    ></app-header>



      <form-helper> <!-- give the tag a slot prop then specify the name in used -->
        <h1 slot="title">this is the title</h1>
        <p slot="text">this is his text</p>
      </form-helper>
    
    
    
    
    <!-- <list v-bind:list="list"></list>
    <hr>
    <list v-bind:list="list" v-bind:list2="list2"></list> -->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Component1 from "./Component1.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import List from "./components/List.vue";
import FormHelper from "./components/FormHelper.vue";

export default {
  components: {
    component1: Component1,
    "form-helper": FormHelper,
    "app-header": Header,
    "app-footer": Footer,
    list: List,
  },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list: [
        { name: "andy", speciality: "Vue Components", show: false },
        { name: "richy", speciality: "Vue Style", show: false },
        { name: "Ram", speciality: "Vue data", show: false },
      ],
      list2: [{ a: "A", b: "B", c: "C" }],
      title: "Vue js",
    };
  },
  methods: {
    hi() {
      return "hi";
    },
    updateTitle(updatedTitle) {
      this.title = updatedTitle;
    },
  },
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
  color: #09884f;
}
</style>
