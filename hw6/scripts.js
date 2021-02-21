
let nambersArray;

showResult()

function showResult() {
  let result = (getNumber());
    (getResult(result))
  while (confirm('Do you wont repeat')){
    if (confirm(`do you want to repeat with the same numbers?`)){
      (getResult(result));
    }else {
      getNumber();
      (getResult(result));
    };
  };
};

function getNumber(){
  let nambers = prompt("Enter numbers separated by commas", "1,2,...").split(','); //делим стороку по "," и перобразуем в масив 
  nambersArray = nambers.map(Number); // создаем и преобразуем в масив чисел
  return nambersArray;
};

function getResult () { 
let choiceAction = prompt(`
  Select and enter the operation number
    1. Sort ascending
    2. Output multiples of 3
    3. Glue all numbers into a string (with the specified divider)
    4. Display the maximum number
    5. Display the minimum number
  `);
switch(choiceAction) {
  case '1':
    result = nambersArray.sort((a,b) => a-b);
    break
  case '2':
    result = nambersArray.filter((e) => e % 3 == 0);
    break
  case '3':
    let unionSymbol = prompt('Enter union symbol','');
    result = nambersArray.join(unionSymbol);
    break 
  case '4':
    result = nambersArray.reduce ((a, b) => Math.max(a, b));
    break
  case '5':
    result = nambersArray.reduce((a, b) => Math.min(a, b));
    break
    default:
    getResult();
};
console.log (result);
 
};
