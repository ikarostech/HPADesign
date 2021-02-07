import { Vector2, VertexColors } from "three";
import PosValue from '@/model/math/PosValue/PosValue'

export default class {
  // スタッガード格子は長方形を想定
  public constructor(vertex: Vector2[]) {
    this.vertex = vertex;
    this.vel_x = {
      left: {
        pos: vertex[0].clone()
          .add(vertex[2].clone())
          .divideScalar(2),
        value: 0
      },
      right: {
        pos: vertex[1].clone()
          .add(vertex[3].clone())
          .divideScalar(2),
        value: 0
      }
    };
    this.vel_y = {
      top: {
        pos: vertex[0].clone()
          .add(vertex[1].clone())
          .divideScalar(2),
        value: 0
      },
      bottom: {
        pos: vertex[2].clone()
          .add(vertex[3].clone())
          .divideScalar(2),
        value: 0
      }
    };
    this.pressure = {
      pos: vertex[0].clone()
        .add(vertex[1].clone())
        .add(vertex[2].clone())
        .add(vertex[3].clone())
        .divideScalar(4),
      value: 0
    }
  }
  public vertex: Vector2[];
  public vel_x: {
    left: PosValue;
    right: PosValue;
  };
  public vel_y: {
    top: PosValue;
    bottom: PosValue;
  }
  public pressure: PosValue

}