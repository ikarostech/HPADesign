import InvalidInputArrayError from '@/model/math/Error/InvalidInputArrayError/InvalidInputArrayError';
import * as tf from '@tensorflow/tfjs';
import { Vector2 } from 'three/src/math/Vector2';

export class AIAirfoilPoint {
  public static pointNum = 161;
  public static xInterval = 0.0125;
  public static xPoints: number[] = [0, 0.0125, 0.025, 0.0375, 0.05, 0.0625, 0.075, 0.0875, 0.1, 0.1125, 0.125, 0.1375, 0.15, 0.1625, 0.175, 0.1875, 0.2, 0.2125, 0.225, 0.2375, 0.25, 0.2625, 0.275, 0.2875, 0.3, 0.3125, 0.325, 0.3375, 0.35, 0.3625, 0.375, 0.3875, 0.4, 0.4125, 0.425, 0.4375, 0.45, 0.4625, 0.475, 0.4875, 0.5, 0.5125, 0.525, 0.5375, 0.55, 0.5625, 0.575, 0.5875, 0.6, 0.6125, 0.625, 0.6375, 0.65, 0.6625, 0.675, 0.6875, 0.7, 0.7125, 0.725, 0.7375, 0.75, 0.7625, 0.775, 0.7875, 0.8, 0.8125, 0.825, 0.8375, 0.85, 0.8625, 0.875, 0.8875, 0.9, 0.9125, 0.925, 0.9375, 0.95, 0.9625, 0.975, 0.9875, 1, 0.9875, 0.975, 0.9625, 0.95, 0.9375, 0.925, 0.9125, 0.9, 0.8875, 0.875, 0.8625, 0.85, 0.8375, 0.825, 0.8125, 0.8, 0.7875, 0.775, 0.7625, 0.75, 0.7375, 0.725, 0.7125, 0.7, 0.6875, 0.675, 0.6625, 0.65, 0.6375, 0.625, 0.6125, 0.6, 0.5875, 0.575, 0.5625, 0.55, 0.5375, 0.525, 0.5125, 0.5, 0.4875, 0.475, 0.4625, 0.45, 0.4375, 0.425, 0.4125, 0.4, 0.3875, 0.375, 0.3625, 0.35, 0.3375, 0.325, 0.3125, 0.3, 0.2875, 0.275, 0.2625, 0.25, 0.2375, 0.225, 0.2125, 0.2, 0.1875, 0.175, 0.1625, 0.15, 0.1375, 0.125, 0.1125, 0.1, 0.0875, 0.075, 0.0625, 0.05, 0.0375, 0.025, 0.0125, 0.0]
  public constructor(rawPoint: Vector2[]) {
    /* TODO validatorは別に用意する
    if (rawPoint.length != 161) {
      throw new InvalidInputArrayError('AIAirfoilPoint should be have linear 161 points');
    }
    */
    this.point = rawPoint;
  }
  private point: Vector2[];
  public getTFTensor(): tf.Tensor {
    return tf.reshape(this.point.map(p => p.y), [1, 161]);
  }
  public getTopShape(): Vector2[] {
    const topSlice: Vector2[] = this.point.slice(0, Math.floor(AIAirfoilPoint.pointNum / 2) + 1)
    return topSlice.reverse();
  }
  public getBottomShape(): Vector2[] {
    return this.point.slice(Math.floor(AIAirfoilPoint.pointNum / 2));
  }
}