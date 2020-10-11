<template>
	<DataTable
			:headers="header"
			:items="testItems"
	/>
</template>
<script lang="ts">
import Vue from 'vue';

import DataTable from '@/components/01_element/DataTable/DataTable.vue';

export default Vue.extend({
	components: {
			DataTable
	},
	data () {
		return {
			header: [
				{
					text: '翼根からの距離[m]',
					value: 'dist'
				},
				{
					text: '翼弦長[m]',
					value: 'chord'
				},
				{
					text: '翼型',
					value: 'airfoil'
				},
				{
					text: "揚力密度[kg/m2]",
					value: 'liftDensity'
				}
			],
			testItems: [
				{ 
					dist: 0,
					chord: 1200,
					airfoil: 'naca4412',
					liftDensity: 1.2
				}
			],
		}
	}
})
</script>