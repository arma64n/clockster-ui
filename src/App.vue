<template>
  <div id="app">
    <dumb-format format="pdf"></dumb-format>
    <smart-one></smart-one>
    <dumb-dots></dumb-dots>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    showMessage () {
      console.log('Hey')
    }
  }
};
</script>