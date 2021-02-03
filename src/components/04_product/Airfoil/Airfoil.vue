<template>
  <div>
    <drawing-airfoil></drawing-airfoil>
    <airfoil-table></airfoil-table>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DrawingAirfoil from "@/components/03_composition/DrawingAirfoil/DrawingAirfoil.vue";
import AirfoilTable from "@/components/02_parts/AirfoilTable/AirfoilTable.vue";

export default Vue.extend({
  name: "App",
  components: {
    DrawingAirfoil,
    AirfoilTable,
  },
});
</script>