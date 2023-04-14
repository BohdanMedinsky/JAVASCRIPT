
let i=1;
let sum=0;
let num=Number(prompt(`Введіть  число для завдання`));

for (;i <= num;i+=1) {
    if (num % i == 0) {
    console.log (i);
    sum+=1;}
    }


if (num % i==0) {
    console.log(`ваше число ${num} просте `);
    sum+=1;
    document.write (i) ;
   }
   else if (num>0) {



 if (sum>2) {
console.log (`у числа ${num} стільки ${sum} дільників`);
 } 
 else {
 console.log (`у числа ${num} і ${sum} дільників.`);
 }
}

else if (num1<0) {
console.log ("Потрібно вести більше за 0");
}