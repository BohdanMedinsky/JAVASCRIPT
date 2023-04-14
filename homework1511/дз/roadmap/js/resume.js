/**
 ** правило №1
 *  ===========
 * Циклом називається команда (або група команд), яка багаторазово повторюється
 * доки не буде досягнута певна УМОВА ЗАВЕРШЕННЯ.
 */
let product = 2;
while (product <= 1000) // false
    product = product * 2; // команда яка багаторазово повторюється

console.log(`Value after cycle: ${product}`); // next statement after cycle

// (або група команд), яка багаторазово повторюється
let p = 2;
let iterations = 0;
while (p <= 1000) { // група команд 
    console.log(++iterations);
    p = p * 2;
}
console.log(`Value after cycle: ${p}`);
console.log(`Iteration count: ${iterations}`);


/**
 ** правило №2
 *  ===========
 * Двома формами повторення є:
 *  а) цикл керований лічильником
 *  b) цикл керований контрольним значенням
 */

// a) цикл керований лічильником (з передумовою)
// бо спочатку перевіряється умова а потім, якщо умова істинна, виконується тіло циклу
let counter = 1;
while(counter <= 10) // false
    console.log(`Value of counter: ${counter++}`);
    
console.log(`Last counter value is: ${counter}`);

// a) цикл керований лічильником (з ПОСТумовою)
// бо спочатку виконується тіло циклу а потім перевіряється умова і тіло повторюється доки умова істинна;
let cnt = 10;
do {
    console.log(`Value of cnt: ${cnt--}`); // команда, або тіло циклу
} while (cnt >=1); // true    
console.log(`Last counter value is: ${cnt}`);

// for (intialization; condition; step) {
// 10 9 8 7 6 5 4 3 2 1
for(let i = 9; i >= 1; i -= 2) {
    console.log(`i=${i}`);
}    

// b) цикл керований контрольним значенням

// 11+10+12+7/4
let sum = 0;
let countr = 1; 
let number = Number(prompt("Put any number  between or 1..100 OR -1 to cancel"));
let entered = '';
while(number != -1) { // контрольне значення -1 
    sum = sum + num;
    countr = countr + 1;
    console.log(`Ok. You put: ${number}`);
    entered += ` ${number}`;
    number = Number(prompt("Put any number  between or 1..100 OR -1 to cancel"));
}
if (entered !== '')
    console.log(`All your numbers: ${entered}`);
else {
    console.log('You haven\'t any numbers entered :(');
}


/* 
 ** правило №3
 * ===========
 * Лічильник циклу використовується для підрахунку к-сті повторів групи команд.
 */
// простий приклад
for(let j = 1; j <=4; j++)
    console.log(`Output #${j}`);

// складний приклад "вгадай число"
let randomNumber = Number(Math.floor(Math.random() * 100) + 1);
console.log(`Random is ${randomNumber}`);

let userGuessNum;
let attempts = 0;
let message = '';
do {
    attempts++;
    userGuessNum = Number(prompt("Guess a number"));
    
    // коли хочу завчасно завершити програму
    if (userGuessNum === -1)
        break;

    if (userGuessNum === randomNumber) {
        message = `Congrats! Number is ${userGuessNum}.`;
        console.log(message);
        break;
    } else {
        message = (userGuessNum < randomNumber)
            ? `Your number ${userGuessNum} is less than random number`
            : `Your number ${userGuessNum} is greather then random number`
        console.log(message);
    }    
} while(true);
console.log(`You have ${attempts} attempt(s)`);

/** правило №4
 * ===========
 * Контрольні значення зазвичай використовуються в тих випадках, коли
 * точне число повторень НАПЕРЕД невідомо, і цикл містить оператори, які 
 * отримують дані від користувача при кожній ітерації циклу.
*/
let studentMark;
let sum = 0;
let Counter = 0;
do {
    Counter++;
    studentMark = Number(prompt("Put a mark or -1 to stop"));
    sum += studentMark;
} while (studentMark !== -1);

if (sum > 0)
    console.log(`Marks count: ${Counter}. Average: ${Math.floor(sum/Counter)}`);
else 
    console.log('Stop treating me...');
/* 
 ** правило №5
 * ===========
 * Контрольні значення передаються в програму ОСТАННІМИ
 * після того, як в цю програму уже були передані усі елементи даних
 * необхідні для її роботи та відповідних підрахунків.
 * Тому з контрольними значеннями слід бути обережним,
 * щоб не сплутати їх з реальними даними.
 * 
 * див. попередній приклад
 */ 


 /* 
 ** правило №6
 * ===========
 * Універсальний цикл for() автоматично контролює всі деталі цього циклу:
 *      for (exp1; exp2; exp3)
 *          statement;
 * 
 * де:
 *  exp1; (let i = 0;) – ініціалізує змінну керування лічильником
 *  exp2; (i < 10;) – умова продовження циклу
 *  exp3; (i++) – використовується для збільшення (або зменшення) змінної-лічильника
 *  statement; (sum += i;) – команда (команди) які повторюються циклом
 * 
 * напишіть власний цикл за цим прикладом
 */
for(let j = 1; j < 5; j++)
    console.log(j);

 /** правило №7
 * ===========
 * цикл do/while дуже схожий на while з тою різницею, що do/while
 * перевіряє умову В КІНЦІ циклу, тому тіло циклу буде виконуватися 
 * як мінімум один раз.
 * 
 *      do
 *          statement;
 *      while(condition);
 */
 

 /** правило №8
 * ===========
 * виконання оператора break в тілі циклу for, while, do/while
 * призводить до негайної зупинки циклу та виходу за його межі
 * до виконання наступної за циклом інструкції коду.
 * Тобто виконання програми продовжиться з наступної за циклом команди.
*/

for(var c = 100; ; c--) { // зупиниться на значенні лічильника рівному 80
    if (c === 80) {
        break;
    }
    console.log(`C = ${c--}`);
}
console.log(`Last c value is: ${c}`);
/* 
 ** правило №9
 * ===========
 * виконання оператора continue в тілі циклу for, while, do/while
 * призводить до пропуску решти операторів ІЗ ТІЛА ЦИКЛУ
 * ТА ПЕРЕХОДУ ДО НАСТУПНОЇ ІТЕРАЦІЇ ЦИКЛУ
 * 
 */

for(let c = 1; c <= 10; c++) { // виведе не парні, парні пропускаємо
    if (c % 2 == 0)
        continue;

    console.log(`C = ${c}`);
}