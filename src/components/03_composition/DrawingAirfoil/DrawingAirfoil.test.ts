import 'jest';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import BezierFoilCanvas from '@/components/01_element/DrugableCanvas/BezierFoilCanvas.vue';
import DrawingAirfoil from './DrawingAirfoil.vue';
import { CL_ModelService } from '@/model/tensorflow/CL_ModelProvider/CL_ModelService';
import { CD_ModelService } from '@/model/tensorflow/CD_ModelProvider/CD_ModelService';
import { Vector2 } from 'three/src/math/Vector2';


describe('DrawingAirfoil', () => {
  let actions: { updateC_L: () => void; updateC_D: () => void }
  let store: Store<{}>

  const localVue = createLocalVue();
  localVue.use(Vuex);

  const wrapper = shallowMount(DrawingAirfoil, {});
  const component = (wrapper.vm as any);

  beforeEach(() => {
    actions = {
      updateC_L: jest.fn(),
      updateC_D: jest.fn(),
    }

    store = new Vuex.Store({
      state: { C_L: 0, C_D: 0 },
      actions
    })
  })

  it('snapshot test', () => {
    // when&then
    expect(wrapper.element).toMatchSnapshot();
  });

  it('shape正常系 - emit:updatedShapeを受け取る', () => {
    // when
    const shape: Vector2[] = [new Vector2(1, 1)];

    // then
    wrapper.findComponent(BezierFoilCanvas).vm.$emit('updateShape', shape);
    expect((wrapper.emitted().updateShape as Array<any>)[0][0]).toBe(shape);
  });
  it('shape正常系 - emitで受け取ったデータを自分のdataに入れる', () => {
    // when
    const shape: Vector2[] = [new Vector2(1, 1)];

    // then
    component.updateShape(shape);
    expect(component.shape).toBe(shape);
  })
  it("C_L更新時にstore/C_Lの値を更新", async () => {
    //given
    const wrapper = shallowMount(DrawingAirfoil, { store, localVue });
    const component = (wrapper.vm as any);
    // そのまま使うとundefinedになってしまうため無理やり型を入れてしまう
    component.cl_service = await CL_ModelService.newBuild();
    component.cd_service = await CD_ModelService.newBuild();
    jest.spyOn(component.cl_service, 'predict').mockReturnValue(-1);
    jest.spyOn(component.cd_service, 'predict').mockReturnValue(-1);

    // when
    component.updateShape([new Vector2(1, 1)]);

    // then
    wrapper.vm.$nextTick(() => {
      expect(component.shape).toEqual([new Vector2(1, 1)]);
      console.log(component.C_L);
      expect(component.C_L).toEqual(-1);
      expect(actions.updateC_L).toBeCalled()
    })
  });

  it("C_D更新時にstore/C_Dの値を更新", async () => {
    // given
    const wrapper = shallowMount(DrawingAirfoil, { store, localVue });
    const component = (wrapper.vm as any);
    // そのまま使うとundefinedになってしまうため無理やり型を入れてしまう
    component.cl_service = await CL_ModelService.newBuild();
    component.cd_service = await CD_ModelService.newBuild();
    jest.spyOn(component.cl_service, 'predict').mockReturnValue(-1);
    jest.spyOn(component.cd_service, 'predict').mockReturnValue(-1);

    // when
    component.updateShape([new Vector2(1, 1)]);

    // then
    wrapper.vm.$nextTick(() => {
      expect(component.shape).toEqual([new Vector2(1, 1)]);
      console.log(component.C_D);
      expect(component.C_D).toEqual(-1);
      expect(actions.updateC_D).toBeCalled()
    })


  });

  it('C_L異常系 - shapeが空の時にC_Lの値を0にする', async () => {
    // given
    // そのまま使うとundefinedになってしまうため無理やり型を入れてしまう
    component.cl_service = await CL_ModelService.newBuild();

    // when
    component.updateShape([]);

    // then
    expect(component.shape).toEqual([]);
    expect(component.C_L).toEqual(0);
  });

  it('C_L異常系 - shapeが空の時にC_Dの値を0にする', async () => {
    // given
    // そのまま使うとundefinedになってしまうため無理やり型を入れてしまう
    component.cl_service = await CD_ModelService.newBuild();

    // when
    component.updateShape([]);

    // then
    expect(component.shape).toEqual([]);
    expect(component.C_D).toEqual(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })
});