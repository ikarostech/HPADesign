<template>
	<DataTable
			:headers="headers"
			:items="items"
	/>
</template>
<script lang="ts">
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import DataTable from './DataTable.vue';

const testStory = Vue.extend({
	components: { DataTable },
	data () {
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
});
export default testStory;

storiesOf("DataTable", module)
    .add("DataTable", () => testStory);

</script>