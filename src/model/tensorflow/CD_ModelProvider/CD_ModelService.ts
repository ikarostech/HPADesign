import * as tf from '@tensorflow/tfjs';

import { AIAirfoilPoint } from '../AIAirfoilPoint/AIAirfoilPoint';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class CD_ModelService {

  private constructor(model: tf.LayersModel) {
    this.model = model
  }

  private model: tf.LayersModel;
  public static async newBuild(): Promise<CD_ModelService> {
    const model = await tf.loadLayersModel("https://raw.githubusercontent.com/ikarostech/DW/CD/model.json");
    const service = new CD_ModelService(model);
    return service;
  }

  public predict(point: AIAirfoilPoint): number {
    return Number(this.model.predict(point.getTFTensor()).toString().replace(/[^0-9|.]/g, '')) / 100;
  }

}