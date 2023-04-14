// Завдання №4
// Напишіть функцію, яка дозволяє перевірити чи вказане значення знаходиться у переданому їй
// масиві.
// Input: function isSet(value, dataArray);
// Output: console.log(isSet(9, [‘a’, 2, 4, 9, 3])) -> виведе “так”

let dataArray = String(['a', 2, 4, 9, 3]);
let value = String(prompt(`введіть значення`));

function isSet(value , dataArray) {
    if (dataArray.includes(value))
        console.log(`Ваше значення ${value},  справді  знаходиться  масиві ${dataArray}`);
    else
        console.log (`Ваше значення ${value},  НЕ знаходиться  масиві ${dataArray}`);
}

console.log(isSet(value , dataArray));
// console.log(isSet(9, ['a', 2, 4, 9, 3]));