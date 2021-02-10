let newArr = ["History"];  
do {
const operation  = prompt("Какую операцию нужно выполнить? \n  + \n  - \n * \n / \n sin \n history", "history");
let firstNumber;
let secondNumber;
const resultSum = (a, b) => a+b;
const resultDiff = (a, b) => a-b;
const resultMult = (a, b) => a*b;
const resultDiv = (a, b) => a/b;
if (operation !== "sin" && operation !== "history"){
    do{
        firstNumber = +prompt("Введите, пожалуйста, первое число", "Number"); 
    } while(firstNumber !== firstNumber);
    do{ 
        secondNumber = +prompt("Введите, пожалуйста, второе число", "Number");
    } while(secondNumber !== secondNumber);
} else if (operation == "sin"){
    do{
        firstNumber = +prompt("Введите, пожалуйста, число", "Number"); 
    } while(firstNumber !== firstNumber);
} else if (operation == "history"){
    let historyRes ="";
    for(let i =0; i < newArr.length; i = i + 1) {
        historyRes += (newArr[i])
    };
    alert(historyRes);
};
switch (operation) {
    case '+':
      console.log(`\nOperation Sum: finished with result  = ${resultSum(firstNumber, secondNumber)}`);
      alert(`\nOperation Sum: finished with result  = ${resultSum(firstNumber, secondNumber)}`);
      newArr.push(`\nOperation Sum: finished with result  = ${resultSum(firstNumber, secondNumber)}`);
      break
    case '-':
      console.log (`\nOperation Diff: finished with result  = ${resultDiff(firstNumber, secondNumber)}`);
      alert (`\nOperation Diff: finished with result  = ${resultDiff(firstNumber, secondNumber)}`);
      newArr.push (`\nOperation Diff: finished with result  = ${resultDiff(firstNumber, secondNumber)}`);
      break
    case '*':
      console.log (`\nOperation Mult: finished with result  = ${resultMult(firstNumber, secondNumber)}`);
      alert (`\nOperation Mult: finished with result  = ${resultMult(firstNumber, secondNumber)}`);
      newArr.push (`\nOperation Mult: finished with result  = ${resultMult(firstNumber, secondNumber)}`);
      break
    case '/':
      console.log (`\nOperation Div: finished with result  = ${resultDiv(firstNumber, secondNumber)}`);
      alert (`\nOperation Div: finished with result  = ${resultDiv(firstNumber, secondNumber)}`);
      newArr.push (`\nOperation Div: finished with result  = ${resultDiv(firstNumber, secondNumber)}`);
      break
    case 'sin':
      console.log (`\nOperation Sin: finished with result  = ${Math.sin(firstNumber)}`);
      alert (`\nOperation Sin: finished with result  = ${Math.sin(firstNumber)}`);
      newArr.push (`\nOperation Sin: finished with result  = ${Math.sin(firstNumber)}`);
      break
};
} while(repit = confirm ("Желаете повторить?"));