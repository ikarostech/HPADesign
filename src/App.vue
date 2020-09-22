<template>
  <v-app>
    <SideBar/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import SideBar from './components/04_product/SideBar/SideBar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    SideBar,
  },

  data: () => ({
    //
  }),
});
</script>
