const koef_km_to_mll=0.621371;
const koef_funt_to_kilog=0.453592;
let km=Number(prompt('введіть кількість кілометрів'));
mll=Number(koef_km_to_mll*km);
alert(`${km} кілометрів буде дорівнювати ${mll.toFixed(3)} миль`);
let funt=Number(prompt('напишіть  кількість фунтів'));
kilog=Number(koef_funt_to_kilog*funt);
alert(`${funt} фунтів буде дорівнювати: ${kilog.toFixed(3)} кілограм`);