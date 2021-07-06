<template>
  <v-data-table :headers="headers" :items="items"> </v-data-table>
</template>
<script lang="ts">
import AirfoilExportButton from "@/components/01_element/ExportButton/Airfoil/AirfoilExportButton.vue";
import Airfoil from '@/model/component/airfoil/Airfoil'

import Vue from "vue";

export default Vue.extend({
  //components: { AirfoilExportButton },
  name: "App",

  data: function () {
    return {
      headers: [
        { text: "C_L", value: "C_L" },
        { text: "C_D", value: "C_D" },
      ],
    };
  },
  computed: {
    airfoil: function (): Airfoil {
      console.log(this.$store.getters.getAirfoil().c_l)
      return this.$store.getters.getAirfoil();
    },
    items: function (): any {
      return [{ C_L: this.airfoil.c_l, C_D: this.airfoil.c_d }];
    },
  },
});
</script>