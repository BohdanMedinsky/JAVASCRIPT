let n = prompt("напишіть  ваш вік");

if ((n >= 0 ) && ( n <= 12))

alert("Число" + n + " ви дитина");

else if (n > 12 && n <= 18){
    alert("підліток")

}else  if ( n > 18 && n<= 60)
{
alert("дорослий")
}
else  if ( n > 60)
{
    alert("пенсіонер")
}