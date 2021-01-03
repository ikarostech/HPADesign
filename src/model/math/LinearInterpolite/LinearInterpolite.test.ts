import { Vector2 } from 'three/src/math/Vector2';
import InvalidInputArrayError from '../Error/InvalidInputArrayError/InvalidInputArrayError';
import { LinearInterpolite } from './LinearInterpolite';

describe('Vectorsを受け取り内挿処理を行う', () => {

  it('正常系', () => {
    //given
    const testVectors: Vector2[] = [
      new Vector2(0,0),
      new Vector2(1,1),
      new Vector2(2,4),
    ];

    //when
    const actual: Vector2[] = LinearInterpolite(testVectors, 5);
    
    //then
    const expected: Vector2[] = [
      new Vector2(0,0),
      new Vector2(0.5,0.5),
      new Vector2(1,1),
      new Vector2(1.5,2.5),
      new Vector2(2,4),
    ];
    expect(actual).toMatchObject(expected);
  });

  it('異常系-要素が足りない', () => {
    //given
    const testVectors: Vector2[] = [new Vector2(0,0)];

    //when&then
    expect(() => LinearInterpolite(testVectors, 5)).toThrow(InvalidInputArrayError);
  });

  it('異常系-ベクトルが狭義単調増加を満たしていない', () => {
    //given
    const testVectors: Vector2[] = [new Vector2(0,0), new Vector2(0,1), new Vector2(1,1)];

    //when&then
    expect(() => LinearInterpolite(testVectors, 5)).toThrow(InvalidInputArrayError);
  });
})