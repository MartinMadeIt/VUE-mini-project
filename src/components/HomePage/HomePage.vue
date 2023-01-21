<template>
    <Navbar />
    <Header />
    <TilesView />
    <FaqsView />
    <JoinUs />
  </template>
  
  <script lang="js">
  import FaqsView from './Faqs/FaqsView.vue';
  import Header from './Header.vue';
  import JoinUs from './JoinUs.vue';
  import Navbar from './Navbar.vue';
  import TilesView from './Tiles/TilesView.vue';
  
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
  