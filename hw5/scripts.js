alert("Hello");
let arr =[];
let mamyNambers = "";
do{
  mamyNambers = +prompt("how many numbers do you want to sort?");
} while (mamyNambers < 3);
for(let i = 1; i <= mamyNambers; i++){
  let namber = +prompt("Please push namber");
  arr.push(namber);
};
arr.sort(function(a,b){ 
  return a - b;
});
console.log(arr);




