import { pairs } from './pairs';

it.each`
    args
    ${['a', 3]}
    ${['a', 'bb']}
`('should throw an error for invalid argument', ({ args }) => {
    expect(() => {
        pairs(...args);
    }).toThrow('Invalid input');
});

it.each`
    args                | expected
    ${[]}               | ${[]}
    ${['a']}            | ${['aa']}
    ${['a', 'b']}       | ${['aa', 'ab', 'ba', 'bb']}
    ${['a', 'b', 'c']}  | ${['aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc']}
`('should return all pairs for $input', ({ args, expected }) => {
    const results = pairs(...args);

    expect(results).toEqual(expected);
});