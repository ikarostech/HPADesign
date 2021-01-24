<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">書き出し</v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>dat</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
import { Vector2 } from "three/src/math/Vector2";
import Vue, { PropType } from "vue";
export default Vue.extend({
  props: {
    shape: Array as PropType<Vector2[]>,
  },
});
</script>