alert("Привет");
const firstNumber = +prompt("Введите, пожалуйста, первое число");
const secondNumber = +prompt("Введите, пожалуйста, второе число");
const result = `
    Calculations are finished!
    Sum: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}
    Diff: ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}
    Mult: ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}
    Div: ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}
`;
console.log(result);
alert(result);

 
