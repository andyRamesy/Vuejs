import Vue from 'vue'
import App from './App.vue'
// import  Component1  from './Component1.vue'

// Vue.component("component1",Component1) //imported globaly

//event bus 
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
