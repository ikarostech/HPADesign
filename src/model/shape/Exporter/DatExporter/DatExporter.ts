import { Vector2 } from "three/src/math/Vector2";

export default function (name: string, shape: Vector2[]): string {
  let content = name + "\n";
  shape.forEach(point => {
    content += " " + point.x.toString() + "     " + point.y.toString() + "\n";
  })
  return content;
}