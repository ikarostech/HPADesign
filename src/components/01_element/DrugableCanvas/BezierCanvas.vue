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

<script>
import Vue from 'vue';
//import { Vector2 } from 'three/src/math/Vector2';

export function buildBezierCurve(linspaceSize) {
	let bezierCurves = []
	this.curves.forEach( curve => {
		const bezierPoints = []
		//TODO BezierPointの仕様変更
		for(let i = 0; i < curve.points.size; i+=2) {
			const p1 = curve.points[i];
			const c = curve.points[i+1];
			const p2 = curve.points[i+2];

			for(let n = 0; n < linspaceSize; n++) {
				let t = n / linspaceSize;
				let pos = Math.pow(1-t, 2) * p1 + t*(1-t) * c + Math.pow(t, 2) * p2;
				bezierPoints.push(pos);
			}
		}
		bezierCurves.push(bezierPoints);
	});
	return bezierCurves;
}

export default Vue.extend({
	name: 'App',
	props: {
		curves: Array,
		radius: Number
	},
	data: function() {
		return {
			canvas: null,
			context: null,
			width: 600,
			height: 200
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