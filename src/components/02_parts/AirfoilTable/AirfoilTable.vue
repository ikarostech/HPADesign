<template>
  <v-data-table :headers="headers" :items="items"> </v-data-table>
</template>
<script lang="ts">
import AirfoilExportButton from "@/components/01_element/ExportButton/Airfoil/AirfoilExportButton.vue";
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
    C_L: function (): number {
      return this.$store.getters.getC_L();
    },
    C_D: function (): number {
      return this.$store.getters.getC_D();
    },
    items: function (): any {
      return [
        { key: "C_L", value: this.C_L },
        { key: "C_D", value: this.C_D },
      ];
    },
  },
});
</script>