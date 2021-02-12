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

import { Vector2 } from "three/src/math/Vector2";
import { CL_ModelService } from "@/model/tensorflow/CL_ModelProvider/CL_ModelService";
import { CD_ModelService } from "@/model/tensorflow/CD_ModelProvider/CD_ModelService";
import { AIAirfoilPoint } from "@/model/tensorflow/AIAirfoilPoint/AIAirfoilPoint";

export type DataType = {
  shape: Vector2[];
  C_L: number;
  C_D: number;
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
      C_L: 0,
      C_D: 0,
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
        this.C_L = 0;
        this.C_D = 0;
        return;
      }
      this.C_L = this.cl_service.predict(new AIAirfoilPoint(val));
      this.C_D = this.cd_service.predict(new AIAirfoilPoint(val));

      this.$store.dispatch("updateC_L", this.C_L);
      this.$store.dispatch("updateC_D", this.C_D);
    },
  },
  mounted: async function () {
    this.cl_service = await CL_ModelService.newBuild();
    this.cd_service = await CD_ModelService.newBuild();
  },
});
</script>