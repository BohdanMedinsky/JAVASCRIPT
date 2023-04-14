let money=Number(prompt('введіть суму загальних продаж'));
const salary=250;
const koef=0.1;
let go=Number(salary+money*koef);
alert(` Оклад: ${salary}\n Надбавка(10% від продаж): ${(money*koef).toFixed(0)}\n Загальний дохід: ${go.toFixed(0)}`);