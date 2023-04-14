let avto ={
    name:"bmw",
    speed: 120,
    color: "blue",
    money:5000
};
console.log(avto);

let str = JSON.stringify(avto);
console.log(str);
const p = JSON.parse(str);
console.log(p);