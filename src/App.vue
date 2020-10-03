<template>
  <v-app>
    <TopBar />
    <SideBar />
    <Contents />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import SideBar from './components/04_product/SideBar/SideBar.vue';
import TopBar from './components/04_product/TopBar/TopBar.vue';
import Contents from './components/04_product/Contents/Contents.vue';
import Footer from './components/04_product/Footer/Footer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    SideBar,
    TopBar,
    Contents,
    Footer,
  },

  data: () => ({
    //
  }),
});
</script>
