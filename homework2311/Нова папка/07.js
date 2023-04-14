// Завдання №7
// Напишіть функцію, яка дозволяє перемістити елемент масив з однієї позиції в іншу (або іншими
// словам “поміняти” два елементи місцями. Зверніть увагу, що функція повинна працювати як із
// додатними так із від'ємними значеннями своїх параметрів. У випадку використання від'ємних
// значень параметрів, функція виконує відлік з кінця масиву.
// Input: console.log(arrMoveEl([10, 20, 30, 40, 50], 0, 2);
// Output: [20, 30, 10, 40, 50].
// Input: console.log(arrMoveEl([10, 20, 30, 40, 50], -1, -2);
// Output: [10, 20, 30, 50, 40]

let arr = [10, 20, 30, 40, 50];
let from = Number(prompt(`введіть from`));
let to = Number(prompt(`введіть to`));

function array_move(arr, from, to) {
  while (from < 0)
    from += arr.length;
  while (to < 0)
    to += arr.length;
  if (to >= arr.length) {
    var k = to - arr.length + 1;
      while (k--)
        arr.push(undefined);
  }
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
};
  
console.log(arr);
console.log(array_move(arr, from, to));
