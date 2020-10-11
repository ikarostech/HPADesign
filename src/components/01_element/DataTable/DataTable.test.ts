import { mount } from '@vue/test-utils';
import DataTable from './DataTable.vue';

describe('DataTable', () => {
    it('snapshot test', () => {
        const wrapper = mount(DataTable);
        expect(wrapper.element).toMatchSnapshot();
    });
});