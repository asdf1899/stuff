<template>
  <div id="app">
    <Homepage></Homepage>
  </div>
</template>

<script>
  import Homepage from './components/Homepage.vue'
  import router from './router'

  export default {
    name: 'App',
    router,
    components: {
      Homepage
    }
  }
</script>
<style>
  @import './assets/tuftecss.css';
</style>