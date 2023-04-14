let arr1= [1, 0 , 2, 3, 4];
let arr2 = [3 , 5, 6, 7, 8 ,13];
let finale=[];

lenght = (arr1.length > arr2.length) ? arr1.length : arr2.length;

for (let i = 0; i < lenght; i++){

    const a = arr1[i] === undefined ? 0 : arr1[i];
    const b = arr2[i] === undefined ? 0 : arr2[i];

    
    finale.push(a + b);
}

console.log(finale);


