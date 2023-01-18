<template>
  <Navbar />
  <Header />
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Header,
    Navbar
  }
}
</script>

<style scope lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: rgba(128, 128, 128, 0.14);
}
</style>
