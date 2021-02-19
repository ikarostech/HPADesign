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
  const afterMesh = mesh.latticeTable.slice();
  const size: Vector2 = new Vector2(afterMesh.length, afterMesh[0].length)
  //初期流速をいれる
  for (let y = 0; y < size.y; y++) {
    afterMesh[0][y].vel_x.left.value = initVelocity.x;
  }

  // xが小さいほうから伝播させる
  for (let x = 0; x < mesh.latticeTable.length; x++) {
    //壁があるかどうかを見つけ上のポイントと下のポイントを見つけ出しておく

  }
}