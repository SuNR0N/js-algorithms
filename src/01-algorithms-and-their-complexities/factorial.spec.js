import { factorial } from './factorial';

it.each`
    number  | expected
    ${-3}   | ${-6}
    ${-2}   | ${-2}
    ${-1}   | ${-1}
    ${0}    | ${1}
    ${1}    | ${1}
    ${2}    | ${2}
    ${3}    | ${6}
`('should return $expected for $number', ({ number, expected }) => {
    const result = factorial(number);

    expect(result).toBe(expected);
});