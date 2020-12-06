import * as tf from '@tensorflow/tfjs';

import AIAirfoilPoint from '../AIAifoilPoint/AIAirfoilPoint';

export class CL_ModelService {

  private constructor(model : tf.LayersModel) {
    this.model = model
  }

  private model: tf.LayersModel;
  public static async newBuild() : Promise<CL_ModelService> {
    let model = await tf.loadLayersModel("https://raw.githubusercontent.com/ikarostech/DW/master/model.json");
    let service = new CL_ModelService(model);
    return service;
  }

  public predict(point : AIAirfoilPoint): Number {
    return Number(this.model.predict(point.getTFShape()).toString().replace(/[^0-9|.]/g, ''));
  }
  
}