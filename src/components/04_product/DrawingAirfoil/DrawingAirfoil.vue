<template>
  <div>
    <BezierCanvas 
      :curves="curves"
      :radius="10" 
    />
    <AIAirfoilCanvas/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import BezierCanvas from '@/components/01_element/DrugableCanvas/BezierCanvas.vue'
import AIAirfoilCanvas from '@/components/03_composition/AIAirfoilCanvas/AIAirfoilCanvas.vue';
//test
// eslint-disable-next-line no-unused-vars
import { CanvasPoint } from '../../../components/01_element/DrugableCanvas/CanvasPoint';
import { BezierCurve } from '../../../components/01_element/DrugableCanvas/BezierCurve';
import { Vector2 } from 'three/src/math/Vector2';


export default Vue.extend({
  name: 'App',
  components: {
    BezierCanvas,
    AIAirfoilCanvas
  },
  data: function() {
    let test1 : CanvasPoint = {
      point: new Vector2(100,100),
      visible: true
    }
    let test2 : CanvasPoint = {
      point: new Vector2(200,200),
      visible: true
    }

    let bezierCurve : BezierCurve = new BezierCurve();

    bezierCurve.points = [test1, test2];
    return {
      curves : [
        bezierCurve
      ]
   };
}
});
</script>