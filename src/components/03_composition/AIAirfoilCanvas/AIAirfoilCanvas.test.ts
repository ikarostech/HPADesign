import { shallowMount } from '@vue/test-utils';
import * as tf from '@tensorflow/tfjs';
import AIAirfoilCanvas from './AIAirfoilCanvas.vue';


describe('Tensorflowjs', () => {
  
  it('CL model', async () => {
    let model_CL = await tf.loadLayersModel("https://raw.githubusercontent.com/ikarostech/DW/master/model.json");
    const wrapper = shallowMount(AIAirfoilCanvas);
    expect((wrapper.vm as any).predict_CL).toBe(0.9221804);
  })
})