
let num = Number(prompt(`число для завдання`));
let sum = 0;

if (!num) 



{
     alert(`Не вірно введені дані`)
} 

else {

function NUM (num) {
     console.log(` ділити ${num}`)



for (i=1;i<num;i++) {
if (num%i==0) {
console.log(i);
sum=sum+i;
         }
     }
console.log(` Всього : ${sum}`);
return sum;
}
}

if (NUM (num)==num) {
    console.log(`${num} NUM`);
} else {
    console.log(`${num}-problem - NUM `);
}