import { Vector2 } from 'three/src/math/Vector2';
import DxfExporter from './DxfExporter';

describe('shapeを受け取りDxfに変換する', () => {
  it('座標データを受け取ってPOLYLINEを作る', () => {
    //given
    const testVectors: Vector2[] = [
      new Vector2(0, 0),
      new Vector2(1, 1),
      new Vector2(2, 4),
    ];

    //when
    const actual: string = DxfExporter(testVectors);

    //then
    const expected: string = "0\nSECTION\n" +
      "2\nHEADER\n" +
      "0\nENDSEC\n" +
      "0\nSECTION\n" +
      "2\nENTITIES\n" +
      "0\nPOLYLINE\n" +
      "8\n0\n" +
      "66\n1\n" +
      "70\n1\n" +
      "0\nVERTEX\n" +
      "8\n0\n" +
      "10\n0\n" +
      "20\n0\n" +
      "30\n0\n" +
      "0\nVERTEX\n" +
      "8\n0\n" +
      "10\n1\n" +
      "20\n1\n" +
      "30\n0\n" +
      "0\nVERTEX\n" +
      "8\n0\n" +
      "10\n2\n" +
      "20\n4\n" +
      "30\n0\n" +
      "0\nSEQEND\n" +
      "8\n0\n" +
      "0\nENDSEC\n" +
      "0\nEOF\n";

    expect(actual).toEqual(expected);
  })
})