<template>
  <div>
    <BezierFoilCanvas 
      :topControls="topControls"
      :canverControls="canverControls"
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
  },
  data: function() {
    const topControls = new BezierControls();
    topControls.points = [
      {
            point: new Vector2(0.0, 0.0),
            visible: false,
          },
          {
            point: new Vector2(0.0, 0.09),
            visible: true,
          },
          {
            point: new Vector2(0.34, 0.09),
            visible: true,
          },
          {
            point: new Vector2(0.6, 0.09),
            visible: true,
          },
          {
            point: new Vector2(1.0, 0.0),
            visible: false,
          },
    ];
    const canverControls = new BezierControls();
    canverControls.points = [
          {
            point: new Vector2(0.0, 0.0),
            visible: false,
          },
          {
            point: new Vector2(0.2, 0.03),
            visible: true,
          },
          {
            point: new Vector2(0.55, 0.03),
            visible: true,
          },
          {
            point: new Vector2(0.65, 0.03),
            visible: true,
          },
          {
            point: new Vector2(1, 0),
            visible: false,
          },
    ];
    return {
      topControls: topControls,
      canverControls: canverControls
   };
}
});
</script>