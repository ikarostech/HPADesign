import { mount } from '@vue/test-utils';
import DataTable from './DataTable.vue';

describe('DataTable', () => {
	it('snapshot test', () => {
		const wrapper = mount(DataTable, {
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
		expect(wrapper.element).toMatchSnapshot();
	});
});