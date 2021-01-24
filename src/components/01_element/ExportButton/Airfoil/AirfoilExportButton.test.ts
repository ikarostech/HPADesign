import { shallowMount } from '@vue/test-utils';
import { Vector2 } from 'three/src/math/Vector2';
import AirfoilExportButton from './AirfoilExportButton.vue';

describe('AirfoilExportButton', () => {
  const wrapper = shallowMount(AirfoilExportButton, {
    propsData: {
      shape: [new Vector2(1, 1), new Vector2(2, 2)],
    }
  });

  it('snapshot test', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  it('datエクスポートがクリックされるとexportDatが走る', async () => {
    const datElement = wrapper.findAll("v-list-item").at(0);
    expect(datElement.text()).toEqual("dat");

    wrapper.setMethods({
      exportDat: jest.fn()
    });
    await datElement.trigger("click")

    expect((wrapper.vm as any).exportDat).toHaveBeenCalled();
  })
})