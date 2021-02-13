alert("Hello");

const nambers = prompt("Enter numbers separated by commas", "1,2,...").split(','); //делим стороку по "," и перобразуем в масив  
let nambersArray = nambers.map(Number);; // создаем и преобразуем в масив чисел

function repeat(){
const choiceAction = prompt(`
Select and enter the operation number
  1. Sort ascending
  2. Output multiples of 3
  3. Glue all numbers into a string (with the specified divider)
  4. Display the maximum number
  5. Display the minimum number
`);
switch(choiceAction) {
  case '1':
    nambersArray = nambersArray.sort(function(a,b) { return a-b});
    break
  case '2':
    nambersArray = nambersArray.filter(e => e % 3 == 0);
    break
  case '3':
    let unionSymbol = prompt('Enter union symbol','');
    nambersArray = nambersArray.join(`${unionSymbol}`);
    break 
  case '4':
    nambersArray = nambersArray.reduce(function(a, b) {
    return Math.max(a, b);
    });
    break
  case '5':
    nambersArray = nambersArray.reduce(function(a, b) {
    return Math.min(a, b);
    });
    break
};
console.log(nambersArray);
};

 if (confirm('Do you wont repeat')){
   if (confirm(`do you want to repeat with the same numbers?`)){
      repeat();    
   };
 };