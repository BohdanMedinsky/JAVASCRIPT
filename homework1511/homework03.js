

let a = Number(prompt(`Введіть  1 число`));
do{
    x = Number(prompt(`Введіть 2 і тд числа . і  9999 для завершення`));
} while(x!='9999')
    function min(a,x) {
        if (a < x) {
          res=a;
          console.log(a);
        } else {
          res=x;
          console.log(x);
        }
        return res;
      }


console.log(`  найменше вказане вами число :${min(a,x)}`);
