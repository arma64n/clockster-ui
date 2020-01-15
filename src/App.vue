<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <dots/>
    <format format="xls"/>
  </div>
</template>

<script>
import Dots from './components/Dots.vue'
import Format from './components/Format.vue'

export default {
  name: 'app',
  components: {
    Dots,
    Format
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
