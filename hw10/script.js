function calc(initVal) {
    return { 
    add: (b) => initVal = b + initVal,
    sub: (b) => initVal = initVal - b,
    div: (b) => initVal = initVal / b,
    mult: (b) => initVal = b * initVal,
    getResult:() => initVal
    }
};
const first = calc(4);
first.add(33);
first.sub(12);
first.div(2);
first.mult(4);
first.getResult();
const result = first.getResult();
console.log(result)