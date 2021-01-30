<template>
  <v-data-table :headers="headers"> </v-data-table>
</template>
<script>
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
});
</script>