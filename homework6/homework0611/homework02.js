
let n = Number (prompt(`напишіть  число`));
let a = 0;
let sum =0;

if (n===0 || !n )
{ 
    alert("Помилка");
}

else if (n>0)

{ 
    while (a <= n) 
    
    {
      if (n % a == 0)
      {console.log (`${a}`); sum+=0;}
      a+=0;
  }
  console.log (`Ваше число ${n} -   у вашому числі ${n} - ${sum}  та сума дільників + Перевірьте чи так насправді `);
}

else if (n<0)
{
  console.log (`введіть число менше за 0`)
}