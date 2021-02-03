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
      cl_service: null,
      cd_service: null,
    };
  },
  methods: {
    updateShape: function (shape: Vector2[]): void {
      this.shape = shape;
    },
  },
  computed: {
    C_L: function (): number {
      if (
        this.shape.length === 0 ||
        this.cl_service === null ||
        this.cl_service === undefined
      ) {
        return 0;
      }
      const C_L: number = this.cl_service.predict(
        new AIAirfoilPoint(this.shape.map((point) => point.y))
      );
      this.$store.dispatch("updateC_L", C_L);

      return C_L;
    },
    C_D: function (): number {
      if (
        this.shape.length === 0 ||
        this.cd_service === null ||
        this.cd_service === undefined
      ) {
        return 0;
      }
      const C_D: number = this.cd_service.predict(
        new AIAirfoilPoint(this.shape.map((point) => point.y))
      );
      this.$store.dispatch("updateC_D", C_D);

      return C_D;
    },
  },
  mounted: async function () {
    this.cl_service = await CL_ModelService.newBuild();
    this.cd_service = await CD_ModelService.newBuild();
  },
});
</script>