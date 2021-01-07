import { mount } from '@vue/test-utils';
import * as tf from '@tensorflow/tfjs';
import BezierCanvas from './BezierCanvas.vue';
import { BezierCurve } from './BezierCurve';
import { Vector2 } from 'three/src/math/Vector2';


describe('AIAirfoilCanvas', () => {
	it('snapshot test', () => {
    const bezierCurve = new BezierCurve();

    const curves: BezierCurve[] = [
      
    ];
		const wrapper = mount(BezierCanvas, {
      propsData: {
        curves: [ {
            points: [
              {
                point: new Vector2(0,0),
                visible: true
              },
              {
                point: new Vector2(200,0),
                visible: true
              },
              {
                point: new Vector2(200,200),
                visible: true
              }
            ]
          }
        ],
        radius: 10
			}
		});
		expect(wrapper.element).toMatchSnapshot();
	});
});