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
import assert from 'assert'
import { LinearInterpolite } from '@/src/model/math/LinearInterpolite/LinearInterpolite';
import { Vector2 } from 'three/src/math/Vector2';
import Vue, { PropType } from 'vue';
import { BezierControls } from './BezierControls';
import { CanvasPoint } from './CanvasPoint';

//import { Vector2 } from 'three/src/math/Vector2';

export function buildBezierControls(controls:BezierControls ,linspaceSize: number): Vector2[] {
	const bezierCurve: Vector2[] = [];
	
	//TODO BezierPointの仕様変更
	for(let i = 0; i < controls.points.length; i+=2) {
		const p1: Vector2 = controls.points[i].point;
		const c: Vector2 = controls.points[i+1].point;
		const p2: Vector2 = controls.points[i+2].point;

		for(let n = 0; n < linspaceSize; n++) {
			let t: number = n / linspaceSize;
			let pos: Vector2 = 
				p1.multiplyScalar(Math.pow(1-t, 2))
				.add(c.multiplyScalar(t*(1-t)))
				.add(p2.multiplyScalar(Math.pow(t, 2)));
			
			bezierCurve.push(pos);
		}
	}
	
	
	return bezierCurve;
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
		topControls: BezierControls,
		canverControls: BezierControls,
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
	computed: {
		getShape: function(): Vector2[] {
			//翼型上面
			const topShape: Vector2[] = LinearInterpolite(buildBezierControls(this.topControls, 30), 81);
			const canverShape: Vector2[] = LinearInterpolite(buildBezierControls(this.canverControls, 80), 81);
			assert(topShape.length == canverShape.length);
			
			const bottomShape: Vector2[] = []
			for (let i=1; i<topShape.length; i++) {
				const element: Vector2 = canverShape[i]
					.multiplyScalar(2)
					.sub(topShape[i]);
				bottomShape.push(element);
			}
			assert(topShape.length == bottomShape.length + 1);

			return topShape.reverse()
				.concat(bottomShape);
		}
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
			const curves = [this.topControls, this.canverControls];
			curves.forEach( curve => {
				curve.points
					.filter(item => item.visible)
					.map(item => item.point)
					.forEach(point => {
						this.ctx.beginPath();
						this.ctx.arc(point.x, point.y, this.radius, 0 ,Math.PI * 2, false);
						this.ctx.fillStyle = curve.controlPointStyle;
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