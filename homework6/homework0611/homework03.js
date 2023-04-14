
let a =0;
let b =0;
let c =0;
let d =0;
let y =0;
let count =1;

let x = Number(prompt(`введіть кількість`));


while (count<=x) {
   
    let num = Number(prompt(`введіть число`));
    console.log(`${num}`);

    if (num<0 && num%2==0)  {
        b +=1; d +=1;
    }
    else if (num<0 && num%2!==0) {
        b +=1; y +=1;
    }
    else if (num>0 && num%2==0) {
        a +=1; d +=1;
    }
    else if (num>0 && num%2!==0) {
        a +=1; y +=1;
    }
    else if (num===0 && num%2==0) {
        c +=1; d +=1;
    }
   
}
document.write(x)(`введено ${x} чисел, серед них:`);
document.write(а)(`додатніх - ${a}`);
document.write(b)(`від"ємних - ${b}`);
document.write(c)(`нулів - ${c}`);
document.write(d)(`парних - ${d}`);
document.write(y)(`непарних - ${y}`);