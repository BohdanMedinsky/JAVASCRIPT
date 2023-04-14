// Завдання №5
// Напишіть функцію, яка повертає рандомний елемент із вказаного масива.
// Input: function arrGetRand(dataArray);
// Output: console.log(arrGetRand([4, 6, 11, 99, -4, 56])) -> 99.
// Output: console.log(arrGetRand([4, 6, 11, 99, -4, 56])) -> 11.
// Output: console.log(arrGetRand([4, 6, 11, 99, -4, 56])) -> 6.

let Input = [4, 6, 11, 99, -4, 56];

function arrGetRand(Input) {
    let rand = Math.floor(Math.random()*Input.length);
    let rValue = Input[rand];
return rValue;
}
console.log(Input);
console.log(arrGetRand(Input));