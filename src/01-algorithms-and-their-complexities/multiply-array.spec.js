import { multiplyArray } from './multiply-array';

it.each`
    input           | multiplier    | expected
    ${[]}           | ${3}          | ${[]}
    ${[1, 2, 3]}    | ${0}          | ${[0, 0, 0]}
    ${[1, 2, 3]}    | ${1}          | ${[1, 2, 3]}
    ${[1, 2, 3]}    | ${3}          | ${[3, 6, 9]}
`('should return $expected given an input of $input and a multiplier of $multiplier', ({ input, multiplier, expected }) => {
    const result = multiplyArray(input, multiplier);

    expect(result).toEqual(expected);
});