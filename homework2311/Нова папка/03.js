// Завдання №3
// Напишіть окрему функцію, яка видаляє елементи із масиву значення яких: null, 0, “”, false,
// ‘undefined’ and NaN.
// Input: var arr1 = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// Sample output :[15, -22, 47].

var arr1 = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function falsy() {
    const output = arr1.filter(Boolean);
    return output;
}
console.log(arr1);
console.log(falsy());