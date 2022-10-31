<template>
	<div>
		<AerodynamicsTable/>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import AerodynamicsTable from '@/components/02_parts/AerodynamicsTable/AerodynamicsTable.vue';
export default Vue.extend({
  name: 'App',
	components: {
		AerodynamicsTable
	},
	data() {
			return {
					headers: [
					{
							text: 'key',
							value: 'key'
					},
					{
							text: 'item',
							value: 'item'
					}
			],
			items: [
					{ key: "key1", item: "item1" },
					{ key: "key2", item: "item2" },
			],
    }
  }
})
</script>