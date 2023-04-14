let a=Number(prompt(' Сума покупки '));
if (a>=200 && a<300)
 {
    alert(`Сума покупки - ${a.toFixed(2)}  ваша знижка - 3% - ${(a*0.03).toFixed(2)}, Oплатити - ${(a*0.97).toFixed(2)}`)
} else if (a>=300 && x<500)
 {
    alert(`Сума покупки - ${a.toFixed(2)} ваша знижка - 5% - ${(a*0.05).toFixed(2)}, Оплатити - ${(a*0.95).toFixed(2)}`)
} 

else if (a>=500) {
    alert(`Сума покупки - ${a.toFixed(2)} ваша знижка - 7% - ${(a*0.07).toFixed(2)},  Оплатити - ${(a*0.93).toFixed(2)}`)
}

else if (a>0 && x<200) 
{
    alert(`Оплатити - ${a.toFixed(2)}`)
} 

else 
{
    alert (`некоректні дані`)
}