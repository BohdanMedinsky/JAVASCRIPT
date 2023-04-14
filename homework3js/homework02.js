let years=Number(prompt("Запросити рік ."));

if(( years%4==0 && years%100!=0) || years%400==0)

{
    alert(" Рік "+years+" високосний");
}

else

{
    alert(" Рік " +years+" не високосний");
}