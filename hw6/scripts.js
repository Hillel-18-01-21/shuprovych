alert("Hello");
let repeat = true;
const userNambers = prompt("Enter numbers separated by commas", "1,2,...").split(','); //делим стороку по "," и перобразуем в масив  
let userNambersArray = userNambers.map(Number);; // создаем и преобразуем в масив чисел

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
    userNambersArray = userNambersArray.sort(function(a,b) { return a-b});
    break
  case '2':
    userNambersArray = userNambersArray.find(e => e % 2 == 1); //!!!!!!!!!!!!! пофиксить
    break
  case '3':
    let unionSymbol = prompt('Enter union symbol','');
    userNambersArray = userNambersArray.join(`${unionSymbol}`);
    break 
  case '4':
    userNambersArray = userNambersArray.reduce(function(a, b) {
    return Math.max(a, b);
    });
    break
  case '5':
    userNambersArray = userNambersArray.reduce(function(a, b) {
    return Math.min(a, b);
    });
    break
};
console.log(userNambersArray);
if (confirm('Do you want to repeat')) {
 repeat = confirm(`Repeat with these numbers - click Yes
 Repeat with new numbers - click No`)
}








