<template>
  <div>
    <BezierFoilCanvas @updateShape="updateShape" :radius="5" />
    <p>C_L = {{ C_L }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import BezierFoilCanvas from "@/components/01_element/DrugableCanvas/BezierFoilCanvas.vue";

import { Vector2 } from "three/src/math/Vector2";
import { CL_ModelService } from "@/model/tensorflow/CL_ModelProvider/CL_ModelService";
import { AIAirfoilPoint } from "@/model/tensorflow/AIAirfoilPoint/AIAirfoilPoint";

export type DataType = {
  shape: Vector2[];
  cl_service: CL_ModelService | null;
};

export default Vue.extend({
  name: "App",
  components: {
    BezierFoilCanvas,
  },
  data: function (): DataType {
    return {
      shape: [],
      cl_service: null,
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
      return this.cl_service.predict(new AIAirfoilPoint(this.shape));
    },
  },
  mounted: async function () {
    this.cl_service = await CL_ModelService.newBuild();
  },
});
</script>