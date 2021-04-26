let _val = 0;
let set = val => {
    _val = val;
}
let add = (x) =>{ _val += x};
let mult = (x) =>{ _val *= x};
let div = (x) =>{ _val /= x};
let sub = (x) =>{ _val -= x};

module.exports = {
    set,
    add,
    mult,
    div,
    sub,
    getResult:() => _val,
    printResult:() => console.log(_val)
}