import { mount } from '@vue/test-utils';
import * as tf from '@tensorflow/tfjs';
import AIAirfoilCanvas from './AIAirfoilCanvas.vue';

describe('AIAirfoilCanvas', () => {
	it('snapshot test', () => {
		const wrapper = mount(AIAirfoilCanvas, {
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