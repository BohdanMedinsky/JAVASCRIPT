let money=prompt('вкажіть кількість коштів у гаманці');
let milk=prompt('вкажіть вартість шоколадки');
let count=Math.floor(money/milk);
alert(' ви можете придбати ' + ' ' + count + ' ' + 'шоколадок');
let balance=money-milk*count;
alert('Ваш залишок' + ' ' + balance + ' ' + 'грошей у гаманці');