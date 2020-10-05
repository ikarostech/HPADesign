<template>
  <v-app>
    <TopBar />
    <SideBar />
    <router-view />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import SideBar from './components/04_product/SideBar/SideBar.vue';
import TopBar from './components/04_product/TopBar/TopBar.vue';
import Footer from './components/04_product/Footer/Footer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    SideBar,
    TopBar,
    Footer,
  },

  data: () => ({
    //
  }),
});
</script>
