<template>
  <div id="app">
    <membersForm/>
  </div>
</template>
<script>
import membersForm from './components/membersForm.vue'
import "../public/w3.css"

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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
