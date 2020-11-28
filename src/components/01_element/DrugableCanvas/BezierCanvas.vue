<template>
<canvas 
    v-on:mousedown="mousedown" 
    v-on:mouseup="mouseup"
    v-on:mousemove="mousemove"
/>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
	props: {
		curves: Array,
		radius: Number
	},

	methods: {
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
		mounted (){
			this.canvas = this.$refs.canvas;
			this.ctx = this.canvas.getContext('2d');
			this.draw();
		},
		draw() {
			this.drawCircle();
		},
		drawCircle() {
			this.Curves.foreach( curve => {
				curve.Points
					.filter(item => item.visible)
					.map(item => item.point)
					.foreach(point => {
						this.ctx.beginPath();
						this.ctx.arc(point.x,point.y,0,this.radius,Math.PI * 2,0);
						this.ctx.fillStyle = "rgba(255,255,255,1)";
						this.ctx.fill();
						this.ctx.stroke();
					});
			});
		},
		drawLine() {

		},
	},
	mounted() {
		//this.canvas = this.$refs.canvas as InstanceType<typeof HTMLCanvasElement>;


	}
});
</script>
<style module>
.canvas {
	border: 1px;
	width: 400px;
	height: 400px;
}
</style>