<template>
  <canvas
    ref="drawCanvas"
    :width="width"
    :height="height"
    v-on:mousedown="mousedown"
    v-on:mouseup="mouseup"
    v-on:mousemove="mousemove"
  />
</template>

<script lang="ts">
import assert from "assert";
import { LinearInterpolite } from "@/model/math/LinearInterpolite/LinearInterpolite";
import { Vector2 } from "three/src/math/Vector2";
import Vue, { PropType } from "vue";
import { BezierControls } from "./BezierControls";
import { CanvasPoint } from "./CanvasPoint";

//import { Vector2 } from 'three/src/math/Vector2';

export function buildBezierControls(
  controls: BezierControls,
  linspaceSize: number
): Vector2[] {
  const bezierCurve: Vector2[] = [];

  //TODO BezierPointの仕様変更
  for (let i = 0; i < controls.points.length - 1; i += 2) {
    const p1: Vector2 = controls.points[i].point;
    const c: Vector2 = controls.points[i + 1].point;
    const p2: Vector2 = controls.points[i + 2].point;

    for (let n = 0; n < linspaceSize; n++) {
      const t: number = n / linspaceSize;

      const pos: Vector2 = p1
        .clone()
        .multiplyScalar(Math.pow(1 - t, 2))
        .add(c.clone().multiplyScalar(2 * t * (1 - t)))
        .add(p2.clone().multiplyScalar(Math.pow(t, 2)));

      bezierCurve.push(pos);
    }
  }
  bezierCurve.push(new Vector2(1, 0));
  return bezierCurve;
}

export type select = {
  isTop: boolean;
  index: number;
}
export type DataType = {
  topControls: BezierControls;
  canverControls: BezierControls;
  canvas: any;
  ctx: any;
  width: number;
  height: number;
	isDrag: boolean;
	selected: select | null;
};

export default Vue.extend({
  name: "App",
  props: {
    radius: Number,
  },
  data: function (): DataType {
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
      canverControls: canverControls,
      canvas: null,
      ctx: null,
      width: 600,
      height: 200,
			isDrag: false,
      selected: null,
    };
  },

  mounted: function () {
    this.canvas = this.$refs.drawCanvas;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.draw();
  },
  computed: {
    getShape: function (): Vector2[] {
      //翼型上面
      const topShape: Vector2[] = LinearInterpolite(
        buildBezierControls(this.topControls, 100),
        81
      );
      const canverShape: Vector2[] = LinearInterpolite(
        buildBezierControls(this.canverControls, 100),
        81
      );
      assert(topShape.length == canverShape.length);

      const bottomShape: Vector2[] = [];
      for (let i = 1; i < topShape.length; i++) {
        const element: Vector2 = canverShape[i]
          .multiplyScalar(2)
          .sub(topShape[i]);
        bottomShape.push(element);
      }
      assert(topShape.length == bottomShape.length + 1);

      const shape = topShape.reverse().concat(bottomShape);
      this.$emit("updateShape", shape);
      return shape;
    },
  },

  methods: {
    mousedown: function (event: {target: HTMLCanvasElement; clientX: number; clientY: number }): void {
			this.isDrag = true;
			this.selected = null;

			const rect = event.target.getBoundingClientRect();
      const mousePos = new Vector2(event.clientX - rect.left - 100, -(event.clientY - rect.top - 100)).divideScalar(400);

      const topControlFirstMatch: number = this.topControls.points
        .findIndex(controlPoint => controlPoint.visible === true && controlPoint.point.distanceTo(mousePos) <= this.radius / 400)
      
      if (topControlFirstMatch >= 0) {
        this.selected = {
          isTop: true,
          index: topControlFirstMatch
        };
        return;
      }

      const canverControlFirstMatch: number = this.canverControls.points
        .findIndex(controlPoint => controlPoint.visible === true && controlPoint.point.distanceTo(mousePos) <= this.radius / 400)
      
      if (canverControlFirstMatch >= 0) {
        this.selected = {
          isTop: false,
          index: canverControlFirstMatch
        };
        return;
      }		
      
			return;
    },
    mouseup: function (): void {
      this.isDrag = false;
      this.selected = null;
    },
    mousemove: function (event: {target: HTMLCanvasElement; clientX: number; clientY: number }): void {
      
			if (this.selected === null || this.isDrag === false) {
				return;
      }
      
			const rect = event.target.getBoundingClientRect();
      const mousePos = new Vector2(event.clientX - rect.left - 100, -(event.clientY - rect.top - 100)).divideScalar(400);
      if (this.selected.isTop) {
        this.topControls.points[this.selected.index].point = mousePos.clone();
      } 
      else {
        this.canverControls.points[this.selected.index].point = mousePos.clone();
      }

      this.draw();
		},
    draw: function (): void {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
			this.drawCircle();
			this.drawLine();
    },
    drawCircle: function (): void {
      const curves = [this.topControls, this.canverControls];
      curves.forEach((curve) => {
        curve.points
          .filter((item) => item.visible)
          .map((item) => item.point)
          .forEach((point) => {
            this.ctx.beginPath();
            this.ctx.arc(
              point.x * 400 + 100,
              -point.y * 400 + 100,
              this.radius,
              0,
              Math.PI * 2,
              false
            );
            this.ctx.fillStyle = curve.controlPointStyle;
            this.ctx.fill();
            this.ctx.strokeStyle = curve.controlPointStyle;
            this.ctx.stroke();
          });
      });
    },

    drawLine(): void {
      this.ctx.beginPath();
      this.ctx.moveTo(500, 100);
      this.getShape.forEach((point) => {
        this.ctx.lineTo(point.x * 400 + 100, -point.y * 400 + 100);
			});
			this.ctx.strokeStyle = 'red';
      this.ctx.closePath();
      this.ctx.stroke();
    },
  },
});
</script>