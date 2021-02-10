alert("Привет");
const firstNumber = +prompt("Введите, пожалуйста, первое число");
const secondNumber = +prompt("Введите, пожалуйста, второе число");
function resultSum (a, b) {
    const operationSum = a + b;
    return operationSum;
}
function resultDiff (a, b) {
    const operationDiff = a - b;
    return operationDiff;
}
function resultMult (a, b) {
    const operationMult = a * b;
    return operationMult;
}
function resultDiv (a, b) {
    const operationDiv = a / b;
    return operationDiv;
}
function finished (a, b) {
    const result = `
    Calculations are finished!
    Sum: ${a} + ${b} = ${resultSum(a, b)}
    Diff: ${a} - ${b} = ${resultDiff(a, b)}
    Mult: ${a} * ${b} = ${resultMult(a, b)}
    Div: ${a} / ${b} = ${resultDiv(a, b)}
    `
    
    return result;
}
const result = finished(firstNumber, secondNumber);
console.log(result);
alert(result);