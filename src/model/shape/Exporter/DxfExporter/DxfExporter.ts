import { Vector2 } from "three/src/math/Vector2";

//ファイル名称などのメタデータをファイルに追加する可能性があるためメソッドとして管理
function dxfHeader(): string {
  return "0\nSECTION\n" +
    "2\nHEADER\n" +
    "0\nENDSEC\n" +
    "0\nSECTION\n" +
    "2\nENTITIES\n";
}

function dxfFooter(): string {
  return "0\nENDSEC\n" +
    "0\nEOF\n";
}

//TODO Vector2[]を受け取るのではなくそのラッパーTypeで受け取るようにする
export default function (shape: Vector2[]): string {
  let content = "";
  const polylineHeader = "0\nPOLYLINE\n" +
    "8\n0\n" +
    "66\n1\n" +
    "70\n1\n";
  const polylineFooter = "0\nSEQEND\n" +
    "8\n0\n";

  shape.forEach(point => {
    const vertex: string = "0\nVERTEX\n" +
      "8\n0\n" +
      "10\n" + point.x.toString() + "\n" +
      "20\n" + point.y.toString() + "\n" +
      "30\n0\n";

    content += vertex;
  })
  const polyline: string = polylineHeader + content + polylineFooter;
  return dxfHeader() + polyline + dxfFooter();
}