import { shallowMount } from '@vue/test-utils';
import { Vector2 } from 'three/src/math/Vector2';
import BezierFoilCanvas from './BezierFoilCanvas.vue';

describe('AIAirfoilCanvas', () => {
  const wrapper = shallowMount(BezierFoilCanvas, {
    propsData: {
      topControls: {
        points: [
          {
            point: new Vector2(0.0, 0.0),
            visible: false
          },
          {
            point: new Vector2(0.0, 0.15),
            visible: true
          },
          {
            point: new Vector2(0.43, 0.15),
            visible: true
          },
          {
            point: new Vector2(0.6, 0.15),
            visible: true
          },
          {
            point: new Vector2(1.0, 0.0),
            visible: false
          },
      ]},
      canverControls: {
        points: [
          {
            point: new Vector2(0.0, 0.0),
            visible: false
          },
          {
            point: new Vector2(0.2, 0.05),
            visible: true
          },
          {
            point: new Vector2(0.55, 0.05),
            visible: true
          },
          {
            point: new Vector2(0.65, 0.05),
            visible: true
          },
          {
            point: new Vector2(0.65, 0.05),
            visible: false
          }
        ]
      },
      radius: 10
    }
  });
	it('snapshot test', () => {
		expect(wrapper.element).toMatchSnapshot();
  });
  
  it('Bezier制御点から翼型Shapeを作成', () => {
    const actual = (wrapper.vm as any).getShape;
    expect(actual).toEqual([]);
  })
});