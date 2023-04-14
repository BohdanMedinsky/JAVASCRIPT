



let y = 0;
let res= 0;
let i =0 ;
let x;
do{
  x = Number(prompt(`Введіть числа від (2 до 9999) число : 9999 для завершення`));
  res=res+x;
  i= i+1;
  y=res/i;
  console.log(` кількість :${i}  числа: ${x}`);
} while(x!='9999')

y=(res-9999)/(i-1);
console.log (` середнє арифметичне:${y}`);












/*while(x!=9999)

{ 
console.log(` ваші числа : ${x}`);
 y+= 1 ;
 res=((x+x)/y);
 x = Number(prompt(`Введіть числа від (2 до 9999) число : 9999 для завершення`));
 }
 if (y !=='')
 console.log(` середнє арифметичне  : ${res}`);   

 else {
 console.log(` problem `);
 }

 */
 
