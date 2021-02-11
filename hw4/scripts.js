let newArr = ["History"];  
let result;
do {
  const operation  = prompt("Какую операцию нужно выполнить? \n  + \n  - \n * \n / \n sin \n history", "history");
  let firstNumber;
  let secondNumber;
  const resultSum = (a, b) => a + b;
  const resultDiff = (a, b) => a - b;
  const resultMult = (a, b) => a * b;
  const resultDiv = (a, b) => a / b;
  if (operation === "+" || operation === "-" || operation === "*" || operation === "/"){
      do{
          firstNumber = +prompt("Введите, пожалуйста, первое число", "Number"); 
      } while(firstNumber !== firstNumber);
     do{ 
        secondNumber = +prompt("Введите, пожалуйста, второе число", "Number");
      } while(secondNumber !== secondNumber);
  } else if (operation === "sin"){
      do{
       firstNumber = +prompt("Введите, пожалуйста, число", "Number"); 
      } while(firstNumber !== firstNumber);
  } else if (operation === "history"){
      let historyRes ="";
      for(let i =0; i < newArr.length; i = i + 1) {
        historyRes += (newArr[i])
      };
      alert(historyRes);
  }else {
    alert('select one of the operands')
  };
  switch (operation) {
    case '+':
      result = resultSum(firstNumber, secondNumber);
      break
    case '-':
      result = resultDiff(firstNumber, secondNumber);
      break
    case '*':
      result = resultMult(firstNumber, secondNumber);
      break
    case '/':
      result = resultDiv(firstNumber, secondNumber);
      break
    case 'sin':
      result = Math.sin(firstNumber);
      break
  };
  if (operation === "+" || operation === "-" || operation === "*" || operation === "/" || operation === "sin") {
    alert(`\nOperation ${operation} : finished with result  = ${result}`);
    newArr.push (`\nOperation ${operation}: finished with result  = ${result}`);
  };
} while(repit = confirm ("Желаете повторить?"));