<template>
  <div id="app">
    <membersForm/>
  </div>
</template>
<script>
import membersForm from './components/membersForm.vue'
import "../public/w3.css"
import "../public/mediaquery.css"
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  name: 'app',
  components: {
   membersForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 53px;
}
</style>
