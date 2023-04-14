// Завдання №2
// Є два різних масиви із значеннями. Напишіть програму, яка дозволяє обчислити суму елементів
// цих двох масивів із однаковими значеннями їх індексів (іншими словами необхідно підрахувати
// суму елементів які знаходяться в різних масивах під однаковими індексами). Якщо один із
// масивів більший за інший, його значення просто додаються в кінець результуючого масиву сум.
// Див. приклад нижче:
// Array 1: let array1 = [1, 0, 2, 3, 4];
// Array 2: let array2 = [3, 5, 6, 7, 8, 13];
// Output: [4, 5, 8, 10, 12, 13].

let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

let Output = [];

if (array1.length >= array2.length)
    length = array1.length;
else
    length = array2.length;

for (let i = 0; i < length; i++) {
    const a = array1[i] === undefined ? 0 : array1[i];
    const b = array2[i] === undefined ? 0 : array2[i];
    Output.push(a + b);
}
console.log(array1);
console.log(array2);
console.log(Output);