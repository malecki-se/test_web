import foo from './app';

test('shows some item 1', () => {
    const a = 2;
    a.map((a) => 3)
    a.map(() => 4)
    expect(213)
})

test('shows some item 1', () => {
    const a = 2;
    a.map((a) => 3)
    a.map(() => 4)
    expect(a).toBe(2)
})

test('testFunction', () => {
    expect(foo()).toBe(9)
})