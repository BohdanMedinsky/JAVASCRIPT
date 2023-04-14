let min = 1;   // Практичне завдання 1
let max = 100;

function multiplicityCalculation (min, max) {

    for (let i = min; i < max; i++)
    if (i % 5 == 0 && i % 3 ==0) 
     document.write(` hello everybody  :${i}<br>`); 
    else if  (i % 3 == 0 ) 
         document.write(`Hello  :${i}<br>`);   
    
       else  if (i % 5 ==0 ) 
         document.write(`everybody  :${i}<br>`); 
         else  
         document.write (`${i}<br>`); 
        }  
        
  multiplicityCalculation(min,max);

  let age = prompt ("напишіть  ваш вік");   // Практичне завдання 2
let years=Number(prompt("Запросити рік ."));
let days = 365;
let result = age*days;
if(( years%4==0 && years%100!=0) || years%400==0)// високосний рік 
{
    alert(" Рік "+years+" високосний");
}

else
{
    alert(" Рік " +years+" не високосний");
}
alert (" ваш вік "+ age + " конвертація " +result+"  у днях ");

let n1={a:1,b:2, c:3};   // Практичне завдання 2
let n2={g:9,i:2, y:3 ,q:4};
let n3={w:9,x:2, y:3};

function getKeyNamesWithCycle() {
  let keys = [];
  if (arguments.length > 0)
      for(let i = 0; i < arguments.length; i++) {
          let miniKeys = [];
          let sum = 0;
          const current_element = arguments[i];
          if (current_element instanceof Object)
              for(let key in current_element) {
                  miniKeys.push(key);
                  sum += current_element[key];
              }
          keys.push(miniKeys);
          console.log(current_element, sum);
      }
  return keys;
}
console.log(getKeyNamesWithCycle(n1, n2,n3));

