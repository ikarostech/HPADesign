import * as tf from '@tensorflow/tfjs';

export default class {
  public constructor(rawPoint : Array<Number>) {
    this.point = rawPoint;
  }
  private point : Number[]
  public getTFShape() : tf.Tensor<tf.Rank>[] {
    return tf.reshape(this.point,[1,161]);
  }
}