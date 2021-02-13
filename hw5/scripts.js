alert("Hello");
let arrayNambers =[];
let quantity;
do{
  quantity = +prompt("how many numbers do you want to sort?");
} while (quantity < 3);
for(let i = 1; i <= quantity; i++){
  let namber = +prompt("Please push namber");
  arrayNambers.push(namber);
};
functionSort(arrayNambers);
function functionSort(arr){                               
    let n = arr.length;
    for (let i = 0; i < n; i++)
    { let v = arr[ i ], j = i-1;
       while (j >= 0 && arr[j] > v)
        { arr[j+1] = arr[j]; j--; }
        arr[j+1] = v;
    }                    
    return arr; 
};
console.log(arrayNambers);  





