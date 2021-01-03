
import { mount } from '@vue/test-utils';
import BezierCanvas from './BezierCanvas.vue';

describe('DataTable', () => {
	it('snapshot test', () => {
		const wrapper = mount(BezierCanvas, {
			data () {
				return {
					
				}
			}
		});
		expect(wrapper.element).toMatchSnapshot();
	});
});