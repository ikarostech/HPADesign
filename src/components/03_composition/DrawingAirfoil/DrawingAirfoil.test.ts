import 'jest';
import { shallowMount } from '@vue/test-utils'
import BezierFoilCanvas from '@/components/01_element/DrugableCanvas/BezierFoilCanvas.vue';
import DrawingAirfoil from './DrawingAirfoil.vue';
import { CL_ModelService } from '@/model/tensorflow/CL_ModelProvider/CL_ModelService';
import { CD_ModelService } from '@/model/tensorflow/CD_ModelProvider/CD_ModelService';
import { Vector2 } from 'three/src/math/Vector2';

describe('DrawingAirfoil', () => {
  const wrapper = shallowMount(DrawingAirfoil, {});
  const component = (wrapper.vm as any);
  it('snapshot test', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('shape正常系 - emit:updatedShapeを受け取る', () => {
    const shape: Vector2[] = [new Vector2(1, 1)];
    wrapper.findComponent(BezierFoilCanvas).vm.$emit('updateShape', shape);
    expect((wrapper.emitted().updateShape as Array<any>)[0][0]).toBe(shape);
  });
  it('shape正常系 - emitで受け取ったデータを自分のdataに入れる', () => {
    const shape: Vector2[] = [new Vector2(1, 1)];
    component.updateShape(shape);
    expect(component.shape).toBe(shape);
  })
  it('C_L正常系 - shape更新時にC_Lの値を更新する', async () => {

    // そのまま使うとundefinedになってしまうため無理やり型を入れてしまう
    component.cl_service = await CL_ModelService.newBuild();
    jest.spyOn(component.cl_service, 'predict').mockReturnValue(-1);

    component.updateShape([new Vector2(1, 1)]);

    expect(component.shape).toEqual([new Vector2(1, 1)]);
    expect(component.C_L).toEqual(-1);
  });
  it('C_D正常系 - shape更新時にC_Dの値を更新する', async () => {

    // そのまま使うとundefinedになってしまうため無理やり型を入れてしまう
    component.cd_service = await CD_ModelService.newBuild();
    jest.spyOn(component.cl_service, 'predict').mockReturnValue(-1);

    component.updateShape([new Vector2(1, 1)]);

    expect(component.shape).toEqual([new Vector2(1, 1)]);
    expect(component.C_L).toEqual(-1);
  });

  it('C_L異常系 - shapeが空の時にC_Lの値を0にする', async () => {
    // そのまま使うとundefinedになってしまうため無理やり型を入れてしまう
    component.cl_service = await CL_ModelService.newBuild();

    component.updateShape([]);

    expect(component.shape).toEqual([]);
    expect(component.C_L).toEqual(0);
  });

  it('C_L異常系 - shapeが空の時にC_Dの値を0にする', async () => {
    // そのまま使うとundefinedになってしまうため無理やり型を入れてしまう
    component.cl_service = await CD_ModelService.newBuild();

    component.updateShape([]);

    expect(component.shape).toEqual([]);
    expect(component.C_D).toEqual(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })
})