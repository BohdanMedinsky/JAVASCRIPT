
const auto= { model:['AUDI A4'], year:['2001'], speed:['100'],
    
function () {
console.log(`2. Функція підраховує час із середньої швидкості. Через кожні 4 години дороги, водій робить перерву на 1 годину.`);




let distance = Number(prompt(`Введіть відстань для підрахунку`));
let hour=1;
let clock=4;
let time1= distance/auto.speed;
let time2 = (time1%clock == 0)?(time1/clock | 0) - hour: time1/clock| 0;
let result = distance/auto.speed + time2;
        


console.log(`Ваша дистанція : ${distance} км, такий час : ${result} годин`);
},
}