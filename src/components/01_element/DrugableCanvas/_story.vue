<template>
  <BezierFoilCanvas
    :radius="radius"
  />
</template>
<script lang="ts">
import Vue from "vue";
import { storiesOf } from "@storybook/vue";

import BezierFoilCanvas from "./BezierFoilCanvas.vue";
import { Vector2 } from "three/src/math/Vector2";

const testStory = Vue.extend({
  components: { BezierFoilCanvas },
  data: () => {
    return {
      radius: 10,
    };
  },
});
export default testStory;

storiesOf("BezierFoilCanvas", module).add(
  "default foil drawing",
  () => testStory
);
</script>