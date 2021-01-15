<template>
    <BezierFoilCanvas 
    :topControls = 'topControls' 
    :canverControls = 'canverControls'
    :radius = 'radius'
    />
</template>
<script lang="ts">
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BezierFoilCanvas from './BezierFoilCanvas.vue'
import { Vector2 } from 'three/src/math/Vector2';

const testStory = Vue.extend({
    components: { BezierFoilCanvas },
    data: () => {
      return {
        topControls: {
          points: [
            {
              point: new Vector2(0.0, 0.0),
              visible: false
            },
            {
              point: new Vector2(0.0, 0.15),
              visible: true
            },
            {
              point: new Vector2(0.43, 0.15),
              visible: true
            },
            {
              point: new Vector2(0.6, 0.15),
              visible: true
            },
            {
              point: new Vector2(1.0, 0.0),
              visible: false
            },
        ]},
        canverControls: {
          points: [
            {
              point: new Vector2(0.0, 0.0),
              visible: false
            },
            {
              point: new Vector2(0.2, 0.05),
              visible: true
            },
            {
              point: new Vector2(0.55, 0.05),
              visible: true
            },
            {
              point: new Vector2(0.65, 0.05),
              visible: true
            },
            {
              point: new Vector2(0.65, 0.05),
              visible: false
            }
          ]
        },
        radius: 10
      }
    }


});
export default testStory;

storiesOf('BezierFoilCanvas', module)
    .add('default foil drawing', () => testStory);
</script>