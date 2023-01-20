<template>
  <Navbar />
  <Header />
  <TilesView />
  <FaqsView />
  <JoinUs />
</template>

<script>
import FaqsView from './components/Faqs/FaqsView.vue';
import Header from './components/Header.vue'
import JoinUs from './components/JoinUs.vue';
import Navbar from './components/Navbar.vue';
import TilesView from './components/Tiles/TilesView.vue';

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    TilesView,
    FaqsView,
    JoinUs
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
