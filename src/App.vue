<template>
  <div id="app">
    <dots large/>
    <format format="pdf" />
    <actions :options="['download', 'show', 'edit', 'activate', 'deactivate', 'delete']" @delete="showMessage()"/>
  </div>
</template>

<script>
import Dots from "./components/dumb/Dots.vue";
import Format from "./components/dumb/Format.vue";
import Actions from "./components/dumb/Actions.vue";

export default {
  name: "app",
  components: {
    Dots,
    Format,
    Actions
  },
  methods: {
    showMessage () {
      console.log('Hey')
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
