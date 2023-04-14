let x = Number(prompt(`Введіть число  2 до 1500 , 1500 для завершення`));
let y =``;
let res='';
while(x!=1500)

{ 
console.log(` ok ${x}`);
 y+=`${x}`;
 res=x+x;
 x = Number(prompt(`Введіть числа від (2 до 1500) число : 1500 для завершення`));
 }
 if (y !=='')
 console.log(` результат : ${res}`);   

 else {
 console.log(` problem `);
 }



 












