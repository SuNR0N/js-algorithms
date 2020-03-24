import { iterativePower } from './iterative-power';

it.each`
    value
    ${-1}
    ${0}
    ${1}
`('$value to the power of 1 should be $value', ({ value }) => {
    const result = iterativePower(value, 1);

    expect(result).toBe(value);
});

it.each`
    value
    ${-1}
    ${0}
    ${1}
`('$value to the power of 0 should be 1', ({ value }) => {
    const result = iterativePower(value, 0);

    expect(result).toBe(1);
});

it.each`
    value   | expected
    ${-2}   | ${-0.5}
    ${-1}   | ${-1}
    ${0}    | ${Infinity}
    ${1}    | ${1}
    ${2}    | ${0.5}
`('$value to the power of -1 should be $expected', ({ value, expected }) => {
    const result = iterativePower(value, -1);

    expect(result).toBe(expected);
});

it.each`
    value   | expected
    ${-2}   | ${4}
    ${-1}   | ${1}
    ${0}    | ${0}
    ${1}    | ${1}
    ${2}    | ${4}
`('$value to the power of 2 should be $expected', ({ value, expected }) => {
    const result = iterativePower(value, 2);

    expect(result).toBe(expected);
});