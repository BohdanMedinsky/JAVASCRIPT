let sum=0;
let count=0;
let average;
let grade;
let x = "";

do{ 
    grade = Number(prompt(" Розвяжіть задачу 2+2*2. При правильній відповіді вікно закриється ."));

if (grade=== 6){
    break;
}


    sum+=grade;
    count++;
    x+=grade + "";
    

grade = Number(prompt(" Розвяжіть задачу 2+2*2"));
}while(true);
{
    
}
if(count>0){
    average=Number(sum/count);
    alert(`Ваші відповіді : ${x} i ${average.toFixed(0)} Правильна  відповідь  до задачі : 6 `);
} else {
    alert(`Калькулятор`);
}
