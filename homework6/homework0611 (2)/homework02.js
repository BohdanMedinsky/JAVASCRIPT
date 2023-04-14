let num = Number(prompt(`Введіть число`));
let pow = Number(prompt(`Введіть ступінь`));
let res = num;
let counter=1;
while(counter<pow-1){
  res *=res * num;
  counter++;
}
console.log(`Num ${num} powered ${pow} times is:${res}`);