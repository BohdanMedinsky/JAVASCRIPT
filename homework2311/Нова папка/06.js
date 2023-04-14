// Завдання №6
// Напишіть функцію arrFill(count, value), де:
// ● count – число від 1 до 1000;
// ● value – число від 1 до 100, скільки елементів count потрібно створити в масиві;
// Функція повинна повернути новий масив заповнений значеннями value, кількість яких рівна
// count.
// Input: console.log(arrFill(7, 0));
// Output:[0,0,0,0,0,0,0] // масив із 7-ми елементів, значення кожного 0.
// Input: console.log(arrFill(22, 8));
// Output:[22,22,22,22,22,22,22,22] // масив із 7-ми елементів, значення кожного 0..

let count = Number(prompt(`введіть КІЛЬКІСТЬ`));
let value = prompt(`введіть значення`);

if (!count) 
    console.log(`error`);
else {
    function arrFill(count, value) {
        let numbers =[];
        for (let i = 0; i < count; i++)
            numbers.push(value);
        return numbers;
    }
    console.log (arrFill(count, value));    
}