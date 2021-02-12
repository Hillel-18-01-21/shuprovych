alert("Hello");
let arrLenght =[];
let mamyNambers = "";
do{
  mamyNambers = +prompt("how many numbers do you want to sort?");
} while (mamyNambers < 3);
for(let i = 1; i <= mamyNambers; i++){
  let namber = +prompt("Please push namber");
  arrLenght.push(namber);
};
arraySort(arrLenght);
function arraySort(arr)      
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

    console.log(arrLenght);  





