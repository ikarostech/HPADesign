import { OrthographicCamera, Vector2 } from "three";
import OrthogonalMesh from "../OrthogonalMesh/OrthogonalMesh";
import StaggerdLattice from "../StaggerdLattice/StaggerdLattice";

/**
 * 初期速度場を作成する
 * 
 * ルールとして
 * 1. 理想流体である（格子に出入りする速度をすべて足し合わせると0になる）
 * 2. 壁などがある場合はその方向に流体は進めない
 * 3. 格子に入ってくる流速が初期流速を上回った場合は進行方向の格子に分けていくことで非圧縮条件を満たすようにする
 */
export function initVelocityField(mesh: OrthogonalMesh, initVelocity: Vector2): OrthogonalMesh {
  //TODO ひとまずinitVelocityについてはx成分のみ考慮する
  const afterMesh: StaggerdLattice[][] = mesh.latticeTable.slice();
  const size: Vector2 = new Vector2(afterMesh.length, afterMesh[0].length)
  //初期流速をいれる
  for (let x = 0; x < size.x; x++) {
    for (let y = 0; y < size.y; y++) {
      if(afterMesh[x][y].wall) {
        afterMesh[x][y].vel_x.left.value = 0;
        afterMesh[x][y].vel_x.left.value = 0;
      }
      else {
        afterMesh[x][y].vel_x.left.value = initVelocity.x;
        afterMesh[x][y].vel_x.left.value = initVelocity.x;
      }
      afterMesh[x][y].vel_y.top.value = 0;
      afterMesh[x][y].vel_y.bottom.value = 0;
    }
  }
  const result: OrthogonalMesh = {
    latticeTable: afterMesh,
    vel: initVelocity
  }
  return result;
}

export function getAccTable (latticeTable: StaggerdLattice[][]): Vector2[][] {
  const size: Vector2 = new Vector2(latticeTable.length, latticeTable[0].length);
  let accTable: Vector2[][] = new Array(size.x)


  for (let x = 0; x < size.x; x++) {
    accTable[x] = new Array(size.y)
    for (let y = 0; y < size.y; y++) {
      const lattice: StaggerdLattice = latticeTable[x][y]
      accTable[x][y] = new Vector2(
        lattice.vel_x.right.value - lattice.vel_x.left.value,
        lattice.vel_y.top.value - lattice.vel_y.bottom.value,
      );
    }
  }
  return accTable;
}

export function getJerkTable (accTable: Vector2[][]): Vector2[][] {
  const size: Vector2 = new Vector2(accTable.length, accTable[0].length);

  let jerkTable: Vector2[][] = Array.from(new Array(size.x), () => new Array(size.y).fill(0));
  
  for (let x = 1; x < size.x - 1; x++) {
    for (let y = 1; y < size.y - 1; y++) {
      const acc: Vector2 = accTable[x][y]
      jerkTable[x][y] = new Vector2(
        ( accTable[x-1][y].x + accTable[x+1][y].x ) / 2,
        ( accTable[x][y-1].y + accTable[x][y+1].y ) / 2,
      );
    }
  }
  return jerkTable;
}

export function getPressureGradient(latticeTable: StaggerdLattice[][]): Vector2[][] {
  const size: Vector2 = new Vector2(latticeTable.length, latticeTable[0].length);

  let pressureGradient: Vector2[][] = Array.from(new Array(size.x), () => new Array(size.y).fill(0));

  for(let x=1; x < size.x -1; x++) {
    for(let y=1; y < size.y -1; y++) {
      pressureGradient[x][y] = new Vector2(
        latticeTable[x+1][y].pressure.value - latticeTable[x-1][y].pressure.value,
        latticeTable[x][y+1].pressure.value - latticeTable[x][y-1].pressure.value,
      );
    }
  }
  return pressureGradient
}

export function computeLossMesh (mesh: OrthogonalMesh, vis: number): Vector2[][] {
  const size: Vector2 = new Vector2(mesh.latticeTable.length, mesh.latticeTable[0].length);

  const accTable: Vector2[][] = getAccTable(mesh.latticeTable)
  const jerkTable: Vector2[][] = getJerkTable(accTable)
  

  let lossMesh: Vector2[][];
  for (let x = 0; x < size.x; x++) {
    for (let y = 0; y < size.y; y++) {
      const viscousyForce: Vector2 = 


    }
  }
}