import { multiplyArrayInPlace } from './multiply-array-in-place';

it.each`
    input           | multiplier    | expected
    ${[]}           | ${3}          | ${[]}
    ${[1, 2, 3]}    | ${0}          | ${[0, 0, 0]}
    ${[1, 2, 3]}    | ${1}          | ${[1, 2, 3]}
    ${[1, 2, 3]}    | ${3}          | ${[3, 6, 9]}
`('should return $expected given an input of $input and a multiplier of $multiplier', ({ input, multiplier, expected }) => {
    const result = multiplyArrayInPlace(input, multiplier);

    expect(result).toEqual(expected);
});