import { Vector2 } from 'three';
import StaggerdLattice from './StaggerdLattice';

describe("constructor", () => {
  const vertex = [
    new Vector2(0, 0),
    new Vector2(5, 0),
    new Vector2(0, 5),
    new Vector2(5, 5)
  ]
  it("vertexを入れると速度点を算出する", () => {
    const lattice = new StaggerdLattice(vertex);

    expect(lattice.vel_x.left.pos).toEqual(new Vector2(0, 2.5));
    expect(lattice.vel_x.right.pos).toEqual(new Vector2(5, 2.5));
    expect(lattice.vel_y.top.pos).toEqual(new Vector2(2.5, 0));
    expect(lattice.vel_y.bottom.pos).toEqual(new Vector2(2.5, 5));
  });
  it("vertexを入れると圧力点を算出する", () => {
    const lattice = new StaggerdLattice(vertex);

    expect(lattice.pressure.pos).toEqual(new Vector2(2.5, 2.5));
  });
});