const a = {
    a: 1,
    b: 2
}

const b = {
    a: 1,
    b: 2,
    c: 3
}


function foo() {
    let a = 0;
    for (let i = 0; i++; i < 10) {
        a++
    }
    return a;
}

export default foo;
exports.a = a;
exports.b = b;
