import DatExporter from '@/model/shape/Exporter/DatExporter/DatExporter';
import DxfExporter from '@/model/shape/Exporter/DxfExporter/DxfExporter';
import { any } from '@tensorflow/tfjs';
import { shallowMount } from '@vue/test-utils';
import { Vector2 } from 'three/src/math/Vector2';
import AirfoilExportButton from './AirfoilExportButton.vue';

describe('AirfoilExportButton', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(AirfoilExportButton, {
      propsData: {
        shape: [new Vector2(1, 1), new Vector2(2, 2)],
      }
    });
  })
  afterEach(() => {
    wrapper.destroy();
    jest.resetAllMocks();
  })
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
  });

  it('dxfエクスポートがクリックされるとexportDxfが走る', async () => {
    const dxfElement = wrapper.findAll("v-list-item").at(1);
    expect(dxfElement.text()).toEqual("dxf");

    wrapper.setMethods({
      exportDxf: jest.fn()
    });
    await dxfElement.trigger("click")

    expect((wrapper.vm as any).exportDxf).toHaveBeenCalled();
  });

  it('exportDatを実行するとDatExporterとdownloadContentを実行する', () => {

    (DatExporter as any) = jest.fn()

    wrapper.setMethods({
      downloadContent: jest.fn()
    });

    (wrapper.vm as any).exportDat();
    expect(DatExporter).toHaveBeenCalled();
    expect((wrapper.vm as any).downloadContent).toHaveBeenCalled();
  });

  it('exportDatを実行するとDxfExporterとdownloadContentを実行する', () => {
    (DxfExporter as any) = jest.fn()

    wrapper.setMethods({
      downloadContent: jest.fn()
    });
    (wrapper.vm as any).exportDat();

    expect((wrapper.vm as any).downloadContent).toHaveBeenCalled();
  });
})