import * as tf from '@tensorflow/tfjs';

export class AIAirfoilPoint {
  public constructor(rawPoint: number[]) {
    this.point = rawPoint;
  }
  private point: number[];
  public getTFTensor(): tf.Tensor {
    return tf.reshape(this.point, [1, 161]);
  }
}