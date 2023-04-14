
let x = Number(prompt("Початок діапозону"));
let y = Number(prompt("Кінець діапазону"));
let sum = 0;

console.log(`початок діапазону - ${x}`);
console.log(`кінець діапазону - ${y}`);

if (x<=z) {
    while(x<=y){       
        sum+=x;  
        x++;
    }
} 
else if (x>=y) {
    while(x>=y){       
        sum+=y;  
        y++;
    }
} 

if ((x=!x)){
    console.log("некоректні дані");      
} 
else {
    console.log(`сума всіх чисел дорівнює ${sum}`);
}
if ((y=!y)){
    console.log ("некоректні дані"); 
}


