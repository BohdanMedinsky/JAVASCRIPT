let a = prompt("напишіть перше число");
let b = prompt("напишіть друге число");
var x;
while (a!=b) {
    if(a>b){
        a=a -b;
    }
    else{
        b = b -a;
    }
}
x=a;
document.write(x)