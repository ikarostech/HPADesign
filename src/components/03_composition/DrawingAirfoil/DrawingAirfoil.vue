<template>
  <div>
    <BezierFoilCanvas @updateShape="updateShape" :radius="5" />
    <airfoil-export-button :shape="shape"></airfoil-export-button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import BezierFoilCanvas from "@/components/01_element/DrugableCanvas/BezierFoilCanvas.vue";
import AirfoilExportButton from "@/components/01_element/ExportButton/Airfoil/AirfoilExportButton.vue";
import airfoil from "@/model/component/airfoil/Airfoil"

import { Vector2 } from "three/src/math/Vector2";
import { CL_ModelService } from "@/model/tensorflow/CL_ModelProvider/CL_ModelService";
import { CD_ModelService } from "@/model/tensorflow/CD_ModelProvider/CD_ModelService";
import { AIAirfoilPoint } from "@/model/tensorflow/AIAirfoilPoint/AIAirfoilPoint";

export type DataType = {
  shape: Vector2[];
  airfoil: airfoil | null;
  cl_service: CL_ModelService | null;
  cd_service: CD_ModelService | null;
};

export default Vue.extend({
  name: "App",
  components: {
    BezierFoilCanvas,
    AirfoilExportButton,
  },
  data: function (): DataType {
    return {
      shape: [],
      airfoil: null,
      cl_service: null,
      cd_service: null,
    };
  },
  methods: {
    updateShape: function (shape: Vector2[]): void {
      this.shape = shape;
    },
  },
  watch: {
    shape: function (val: Vector2[]): void {
      if (
        this.shape.length === 0 ||
        this.cl_service === null ||
        this.cd_service === null
      ) {
        this.airfoil = null
        return;
      }
      
      const airfoilPoint: AIAirfoilPoint = new AIAirfoilPoint(val)
      const C_L = this.cl_service.predict(airfoilPoint);
      const C_D = this.cd_service.predict(airfoilPoint);

      this.airfoil = new airfoil(C_L, C_D)

      this.$store.dispatch("updateAirfoil",this.airfoil);
    },
  },
  mounted: async function () {
    this.cl_service = await CL_ModelService.newBuild();
    this.cd_service = await CD_ModelService.newBuild();
  },
});
</script>