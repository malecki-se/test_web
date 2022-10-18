const {a, b} = require('./app');

it('should get a json objects', () => {
    expect(a).toEqual({a: 1, b: 2})
})

it('should get b json objects', () => {
    expect(b).toEqual({a: 1, b: 2, c: 3})
})
