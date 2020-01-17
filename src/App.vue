<template>
  <div id="app">
    <dots large/>
    <format format="pdf" />
  </div>
</template>

<script>
import Dots from "./components/dumb/Dots.vue";
import Format from "./components/dumb/Format.vue";

export default {
  name: "app",
  components: {
    Dots,
    Format
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
