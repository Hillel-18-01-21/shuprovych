alert("Hello");
let arraySort =[];
let quantityNambers = "";
do{
  quantityNambers = +prompt("how many numbers do you want to sort?");
} while (quantityNambers < 3);
for(let i = 1; i <= quantityNambers; i++){
  let namber = +prompt("Please push namber");
  arraySort.push(namber);
};
functionSort(arraySort);
function functionSort(arr)      
{                               
    let n = arr.length;
    for (let i = 0; i < n; i++)
     { let v = arr[ i ], j = i-1;
       while (j >= 0 && arr[j] > v)
        { arr[j+1] = arr[j]; j--; }
        arr[j+1] = v;
     }                    
    return arr; 
};

    console.log(arraySort);  





