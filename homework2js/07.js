let hour=Number(prompt('введіть кількість годин'));
let min=Number(prompt('введіть кількість хвилин'));
let minandSeconds=Number(min*60);
let hoursandSeconds=Number(hour*60*60);
let Sec=Number(minandSeconds+hoursandSeconds);
alert(`${hour}:${min} годин буде дорівнювати ${Sec} секунд`);