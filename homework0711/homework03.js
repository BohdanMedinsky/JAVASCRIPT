
let hours = Number(prompt(`введіть години`));
let min = Number(prompt(`введіть хвилини`));
let secund = Number(prompt(`введіть секунди`));

let sec = 0;

if (!hours && !min && !secund)


{
     alert(`Не вірно введені дані`);} 
     
     
     
     else {

     function second (hours,min,secund) 
     
     
     {

         sec=hours*3600+min*60+secund;


     return sec;
}
}

console.log(`Ваші данні : ${hours} ${min} ${secund} 

Результат : ${second(hours,min,secund)}`);

