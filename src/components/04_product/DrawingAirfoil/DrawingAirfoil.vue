<template>
  <div>
    <BezierCanvas 
      :curves="curves"
      radius="10" 
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import BezierCanvas from '@/components/01_element/DrugableCanvas/BezierCanvas.vue'

//test
//import { CanvasPoint } from '../../../components/01_element/DrugableCanvas/CanvasPoint';
import { BezierCurve } from '../../../components/01_element/DrugableCanvas/BezierCurve';

export default Vue.extend({
  name: 'App',
  components: {
    BezierCanvas
  },
  data: function() {
    return {
      curves : [
        new BezierCurve()
      ]
   };
}
});
</script>