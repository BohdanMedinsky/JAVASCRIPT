function arrayFill(value, count){
    let numbers =[];
    for (let i = 0; i < count; i++){
        numbers.push(value);
    }
    return numbers;
}

console.log (arrayFill(0,7));
console.log (arrayFill(22,8));






















/*class PrintMaсhine {
    size;
    color;
    family;
    constructor(size = "30px", color = "white", family = "Times New Roman") {
        this.size = size;
        this.color = color;
        this.family = family;
    }
    print(text) {
        document.write(`<span style="font-size:${this.size}; color:${this.color}; font-family:${this.family};">${text}</span>`);
    }

}

let m = new PrintMaсhine("40px", "black", "verdana");
m.print("Hallo,");
m.print("<br />");
m.print("world!");
*/

