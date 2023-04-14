
/*let sum=0;
let num=0;

for( let i =2 ; i<=30; i++){
    if  (num==2|| num==18|| num==22) 
    continue
    if (i%2==0) 
    {      
sum=sum+i;
console.log (` парні :${i}`); 
 }
    
}
console.log (` результат :${sum}`);
*/





let s = 0;
for (let i = 2; i <= 30; i++) {
if (i % 2 == 0) {

if (  i == 2 || i == 4||  i==6) {
        console.log(` пропускаємо :${i}`);
        continue;
    }

 { 
        console.log(` числа ${i}  `);
        s += i;    
    }
} 
}
document.write(`ЗАЗИРНІТЬ У КОНСОЛЬ`)
console.log(` ${s}`);