



//Напишіть функцію, яка зводить передане число у вказаний ступінь. ( 2 варіанти)

/*let num = Number(prompt(`Введіть число`));
let pow = Number(prompt(`Введіть ступінь`));
let sum=0;
function calcSumm(num,pow)
{
console.log(`число : ${num}`);
console.log(`ступінь : ${pow}`);

let sum= num**pow;
console.log(`результат: ${sum}`);
}
calcSumm(num,pow);
*/

let num = Number(prompt(`Введіть число`));
let pow = Number(prompt(`Введіть ступінь`));

let res = num;

while(--pow) {
  res *= num;
}

console.log(res);




