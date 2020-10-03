import { mount } from '@vue/test-utils';
import Contents from './Contents.vue';

describe('Contents', () => {
    it('snapshot test', () => {
        const wrapper = mount(Contents);
        expect(wrapper.element).toMatchSnapshot();
    });
});