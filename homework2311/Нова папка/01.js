//Завдання №1
//Напишіть програму, яка дозволяє знайти перший найбільш повторюваний елемент.
//Input: var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Output: a(5 повторень).

// var arr1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3, 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 2, 4, 9, 3, 2, 4, 9, 3, 2, 4, 9, 3, 2, 4, 9, 3, 2, 4, 9, 3, 2, 4, 9, 3, 2, 4, 9, 3];

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(arr1);
let t=arr1[0];
let p;
let max=arr1[0];  
    for (let i=0; i<arr1.length; i++ ) {
        p=0;
        for (let j=0; j<arr1.length; j++ )
        p+=(arr1[ i]==arr1[ j])?1:0;
            if (p>max) {
                t=arr1[ i];
                max=p;
            }
    }       
console.log(`${t} (${max} повторень)`);