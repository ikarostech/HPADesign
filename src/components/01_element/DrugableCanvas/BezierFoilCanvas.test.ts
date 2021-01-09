import { mount } from '@vue/test-utils';
import * as tf from '@tensorflow/tfjs';
import BezierFoilCanvas from './BezierFoilCanvas.vue';

describe('AIAirfoilCanvas', () => {
	it('snapshot test', () => {
    var TopPoint = [[0.0, 0.0], [0.0, 0.15], [0.43, 0.15], [0.6, 0.15], [1.0, 0.0]]
    var MidPoint = [[0.0, 0.0], [0.2, 0.05], [0.55, 0.05], [0.65, 0.05], [1.0, 0.0]]
		const wrapper = mount(BezierFoilCanvas, {
      propsData: {
        topControls: {
          points: [
            {
              point: {
                x: 0.0, y: 0.0
              },
              visible: false
            },
            {
              point: {
                x: 0.0, y: 0.15
              },
              visible: true
            },
            {
              point: {
                x: 0.43, y: 0.15
              },
              visible: true
            },
            {
              point: {
                x: 0.6, y: 0.15
              },
              visible: true
            },
            {
              point: {
                x: 1.0, y: 0.0
              },
              visible: false
            },
        ]},
        canverControls: {
          points: [
            {
              point: {
                x: 0.0, y: 0.0
              },
              visible: false
            },
            {
              point: {
                x: 0.2, y: 0.05
              },
              visible: true
            },
            {
              point: {
                x: 0.55, y: 0.05
              },
              visible: true
            },
            {
              point: {
                x: 0.65, y: 0.05
              },
              visible: true
            },
            {
              point: {
                x: 0.65, y: 0.05
              },
              visible: false
            }
          ]
        },
        radius: 10
			}
		});
		expect(wrapper.element).toMatchSnapshot();
	});
});