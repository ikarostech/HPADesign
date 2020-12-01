<template>
	<canvas 
		v-on:mousedown="mousedown" 
		v-on:mouseup="mouseup"
		v-on:mousemove="mousemove"
	/>
</template>

<script>
import Vue from 'vue';

let canvas;
let ctx;

export default Vue.extend({
	name: 'App',
	props: {
		curves: Array,
		radius: Number
	},
	mounted: function(){
		canvas = this.$refs.canvas;
		ctx = canvas.getContext('2d');
		this.draw();
	},
	methods: {
		created: function() {
			console.log(this.isDrag);
		},
		
		mousedown: function() {
			this.isDrag = true;
			console.log(this.isDrag);
		},
		mouseup: function() {
			this.isDrag = false;
			console.log(this.isDrag);
		},
		mousemove: function() {

		},
		draw: function(){
			console.log("draw")
			this.drawCircle();
		},
		drawCircle: function() {
			this.Curves.foreach( curve => {
				curve.Points
					.filter(item => item.visible)
					.map(item => item.point)
					.foreach(point => {
						ctx.beginPath();
						ctx.arc(point.x,point.y,0,this.radius,Math.PI * 2,0);
						ctx.fillStyle = "rgba(255,255,255,1)";
						ctx.fill();
						ctx.stroke();
					});
			});
		},
		drawLine() {

		},
	},
	
});
</script>
<style module>
.canvas {
	border: 1px;
	width: 400px;
	height: 400px;
}
</style>