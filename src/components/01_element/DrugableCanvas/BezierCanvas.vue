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
		console.log(this.canvas.height);
		this.ctx.fillRect(20,20,280,280);

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
						this.ctx.arc(point.x,point.y,0,this.radius,Math.PI * 2,0);
						this.ctx.fillStyle = "rgba(0,0,0,1)";
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