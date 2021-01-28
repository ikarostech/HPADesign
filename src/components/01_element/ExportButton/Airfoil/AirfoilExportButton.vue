<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">書き出し</v-btn>
      </template>
      <v-list>
        <v-list-item @click="exportDat">
          <v-list-item-title>dat</v-list-item-title>
        </v-list-item>
        <v-list-item @click="exportDxf">
          <v-list-item-title>dxf</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
import { Vector2 } from "three/src/math/Vector2";
import Vue, { PropType } from "vue";
import DatExporter from "@/model/shape/Exporter/DatExporter/DatExporter";
import DxfExporter from "@/model/shape/Exporter/DxfExporter/DxfExporter";
export default Vue.extend({
  props: {
    shape: Array as PropType<Vector2[]>,
  },
  methods: {
    exportDat(): void {
      const datText = DatExporter("airfoil", this.shape);
      this.downloadContent("airfoil.dat", datText);
    },
    exportDxf(): void {
      const dxfText = DxfExporter(this.shape);
      this.downloadContent("airfoil.dxf", dxfText);
    },
    downloadContent(filename: string, content: string): void {
      const a = document.createElement("a");
      a.href = "data:text/plane," + encodeURIComponent(content);
      a.download = filename;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
  },
});
</script>