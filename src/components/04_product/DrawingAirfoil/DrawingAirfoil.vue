<template>
  <div>
    <BezierFoilCanvas 
      @shapeUpdate = "shapeUpdate"
      :radius="10" 
    />
    <AIAirfoilCanvas/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import BezierFoilCanvas from '@/components/01_element/DrugableCanvas/BezierFoilCanvas.vue'
import AIAirfoilCanvas from '@/components/03_composition/AIAirfoilCanvas/AIAirfoilCanvas.vue';

import { CanvasPoint } from '@/components/01_element/DrugableCanvas/CanvasPoint';
import { BezierControls } from '@/components/01_element/DrugableCanvas/BezierControls';
import { Vector2 } from 'three/src/math/Vector2';


export default Vue.extend({
  name: 'App',
  components: {
    BezierFoilCanvas,
    AIAirfoilCanvas
  }
});
</script>