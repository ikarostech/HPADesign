import { Vector2 } from "three"
import StaggerdLattice from "../StaggerdLattice/StaggerdLattice"

type OrthogonalMesh = {
  latticeTable: StaggerdLattice[][];
  vel: Vector2;
}

export default OrthogonalMesh;