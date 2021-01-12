import { Vector2 } from "three/src/math/Vector2";
import InvalidInputArrayError from "../Error/InvalidInputArrayError/InvalidInputArrayError";

const getXArray = function (vectors: Vector2[], size: number): number[] {
  const range: number  = vectors[vectors.length - 1].x - vectors[0].x;
  return Array(size).fill(0).map((_, index) => range * index / (size - 1));
}

export function LinearInterpolite(vectors: Vector2[], size: number): Vector2[] {
  if (vectors.length < 2) {
    throw new InvalidInputArrayError("LinearInterpolite function needs vectors whose size is over 2 elements");
  }
  // vectorsのx座標が順番に並んでいるかつ同じx座標が存在しないことを確かめる
  for (let i=0; i<vectors.length-1; i++) {
    if (vectors[i].x >= vectors[i+1].x ) {
      throw new InvalidInputArrayError("LinearInterpolite function needs vectors whose have strictly monotonically increasing elements")
    }
  }

  const XArray: number[] = getXArray(vectors, size);

  let index = 0;
  const YArray: number[] = XArray.map(x => {
    while(x<vectors[index].x || vectors[index+1].x<x) {
      index++;
    }
    const left: number = vectors[index].y;
    const right: number = vectors[index+1].y;
    const rate: number = (x - vectors[index].x) / (vectors[index+1].x - vectors[index].x);

    return left * (1-rate) + right * rate;
  });

  const resultVector: Vector2[] = [];
  for(let i=0; i<size; i++) {
    const element: Vector2 = new Vector2(XArray[i], YArray[i]);
    resultVector.push(element);
  }
  
  return resultVector;
}