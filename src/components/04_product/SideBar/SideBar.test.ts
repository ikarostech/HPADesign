import { mount } from '@vue/test-utils';
import SideBar from './SideBar.vue';

describe('SideBar', () => {
    it('snapshot test', () => {
        const wrapper = mount(SideBar);
        expect(wrapper.element).toMatchSnapshot();
    });
});