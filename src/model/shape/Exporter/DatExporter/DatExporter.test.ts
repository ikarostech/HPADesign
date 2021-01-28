import { Vector2 } from 'three/src/math/Vector2';
import DatExporter from './DatExporter';

describe('shapeを受け取りDatに変換する', () => {
  it('翼型名称と座標データを受け取ってdatファイルを作る', () => {
    //given
    const testVectors: Vector2[] = [
      new Vector2(0, 0),
      new Vector2(1, 1),
      new Vector2(2, 4),
    ];

    //when
    const actual: string = DatExporter("test", testVectors);

    //then
    const expected: string = "test\n" +
      " 0     0\n" +
      " 1     1\n" +
      " 2     4\n";

    expect(actual).toEqual(expected);
  })
})