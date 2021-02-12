import StaggerdLattice from '@/model/fluid/StaggerdLattice/StaggerdLattice';
import InvalidInputArrayError from '@/model/math/Error/InvalidInputArrayError/InvalidInputArrayError';
import { AIAirfoilPoint } from '@/model/tensorflow/AIAirfoilPoint/AIAirfoilPoint';
import { Vector2 } from 'three';

export function airfoilMesh(airfoil: AIAirfoilPoint, size: Vector2): StaggerdLattice[][] {
  if (size.x < 1 || size.y < 2) {
    throw new InvalidInputArrayError("size should be over 1x2");
  }

  // x = [0,1], y=[-1,1] の境界を作る
  const latticeLength: number = AIAirfoilPoint.xInterval
  const latticeDensity: number = Math.ceil(1 / latticeLength)
  const meshSize: Vector2 = size.clone().multiplyScalar(latticeDensity);

  const topShape: Vector2[] = airfoil.getTopShape();
  const bottomShape: Vector2[] = airfoil.getBottomShape();

  const mesh: StaggerdLattice[][] = new Array(meshSize.x);

  //init
  for (let i = 0; i < meshSize.x; i++) {
    mesh[i] = new Array(meshSize.y)
    for (let j = 0; j < meshSize.y; j++) {
      mesh[i][j] = new StaggerdLattice([
        new Vector2(i * latticeLength, j * latticeLength),
        new Vector2((i + 1) * latticeLength, j * latticeLength),
        new Vector2(i * latticeLength, (j + 1) * latticeLength),
        new Vector2((i + 1) * latticeLength, (j + 1) * latticeLength)
      ])
    }
  }

  //airfoilがある部分に対してwallを設定する
  const offset: Vector2 = new Vector2((size.x - 1) / 2, size.y / 2);
  const offsetIndex: Vector2 = new Vector2((size.x - 1) / 2, (size.y - 2) / 2).divideScalar(latticeLength)

  for (let i = 0; i < 1 * latticeDensity; i++) {
    for (let j = 0; j < 2 * latticeDensity; j++) {
      let flag = false;
      for (let k = 0; k < 4; k++) {
        //console.log("x:" + (i + offsetIndex.x).toString() + "  y:" + (j + offsetIndex.y))
        const offsetPoint: Vector2 = mesh[i + offsetIndex.x][j + offsetIndex.y].vertex[k].clone().sub(offset);
        if (bottomShape[i + k % 2].y < offsetPoint.y && offsetPoint.y < topShape[i + k % 2].y) {
          flag = true
          break;
        }
      }

      mesh[i + offsetIndex.x][j + offsetIndex.y].wall = flag;
    }
  }
  return mesh;
}