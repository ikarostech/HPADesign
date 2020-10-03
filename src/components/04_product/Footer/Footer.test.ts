import { mount } from '@vue/test-utils';
import Footer from './Footer.vue';

describe('Footer', () => {
    it('snapshot test', () => {
        const wrapper = mount(Footer);
        expect(wrapper.element).toMatchSnapshot();
    });
});