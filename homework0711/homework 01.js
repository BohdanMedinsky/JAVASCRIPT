/*   Напишіть функцію, яка приймає 2 числа та повертає мен-ше з них.*/




let a = Number(prompt(`Введіть число`));
let b = Number(prompt(`Введіть число`));




    function min(a,b) {
        if (a < b) {
          res=a;
          console.log(a);
        } else {
          res=b;
          console.log(b);
        }
        return res;
      }

console.log(`${min(a,b)}`);
