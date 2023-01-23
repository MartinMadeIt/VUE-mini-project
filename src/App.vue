<template>
  <RouterView />
</template>

<script>


export default {
  name: 'App',
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

html {
  scroll-behavior: smooth;
}
</style>
