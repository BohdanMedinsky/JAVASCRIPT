//функцію, яка приймає 2 рядки та порівнює їх довжину. Функція повертає 1, якщо в першому рядку більше символів, ніж у другому; -1 – якщо у другому більше символів, ніж у першому; 0 – якщо рядки однакової довжини.
let arr1= prompt(`Введіть текст`);
let arr2 = prompt(`Введіть текст`);


function text(){
  if(arr1.length>arr2.length)
  console.log(`1`);
  else if(arr1.length<arr2.length)
  console.log(`-1`);
  else (arr1.length==arr2.length)
  console.log(`0`);
}
text();







 







