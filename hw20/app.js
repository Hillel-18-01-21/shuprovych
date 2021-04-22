function calcFactorialBegInt (x) {
    return (x != 1n) ? x * calcFactorialBegInt(x-1n) : 1n
}
console.log( calcFactorialBegInt(15n));