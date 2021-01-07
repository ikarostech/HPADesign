<template>
	<canvas 
		ref = "drawCanvas"
		:width="width"
		:height="height"
		v-on:mousedown="mousedown" 
		v-on:mouseup="mouseup"
		v-on:mousemove="mousemove"
	/>
</template>

<script lang="ts">
import { Vector2 } from 'three/src/math/Vector2';
import Vue, { PropType } from 'vue';
import { BezierCurve } from './BezierCurve';
import { CanvasPoint } from './CanvasPoint';

//import { Vector2 } from 'three/src/math/Vector2';

export function buildBezierCurve(curves:BezierCurve[] ,linspaceSize: number) {
	const bezierCurves: Vector2[][] = [];
	curves.forEach( curve => {
		const bezierPoints: Vector2[] = [];
		//TODO BezierPointの仕様変更
		for(let i = 0; i < curve.points.length; i+=2) {
			const p1: Vector2 = curve.points[i].point;
			const c: Vector2 = curve.points[i+1].point;
			const p2: Vector2 = curve.points[i+2].point;

			for(let n = 0; n < linspaceSize; n++) {
				let t: number = n / linspaceSize;
				let pos: Vector2 = 
					p1.multiplyScalar(Math.pow(1-t, 2))
					.add(c.multiplyScalar(t*(1-t)))
					.add(p2.multiplyScalar(Math.pow(t, 2)));
				
				bezierPoints.push(pos);
			}
		}
		bezierCurves.push(bezierPoints);
	});
	return bezierCurves;
}

export type DataType = {
	canvas: any,
	ctx: any,
	width: number,
	height: number,
	isDrag: boolean
}

export default Vue.extend({
	name: 'App',
	props: {
		curves: Object as PropType<Array<BezierCurve>>,
		radius: Number
	},
	data: function(): DataType {
		return {
			canvas: null,
			ctx: null,
			width: 600,
			height: 200,
			isDrag: false
		};
	},

	mounted: function(){
		this.canvas = this.$refs.drawCanvas;
		this.ctx = this.canvas.getContext('2d');
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.draw();
	},
	
	methods: {
		
		mousedown: function() {
			this.isDrag = true;
		},
		mouseup: function() {
			this.isDrag = false;
		},
		mousemove: function() {

		},
		draw: function(){
			this.drawCircle();
		},
		drawCircle: function() {
			
			this.curves.forEach( curve => {
				curve.points
					.filter(item => item.visible)
					.map(item => item.point)
					.forEach(point => {
						this.ctx.beginPath();
						this.ctx.arc(point.x, point.y, this.radius, 0 ,Math.PI * 2, false);
						this.ctx.fillStyle = "rgba(0,0,0,0.87)";
						this.ctx.fill();
						this.ctx.stroke();
					});
			});
			
		},
		
		drawLine() {
		},
	},
	
});
</script>