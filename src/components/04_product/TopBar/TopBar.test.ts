import { mount } from '@vue/test-utils';
import TopBar from './TopBar.vue';

describe('TopBar', () => {
    it('snapshot test', () => {
        const wrapper = mount(TopBar);
        expect(wrapper.element).toMatchSnapshot();
    });
});