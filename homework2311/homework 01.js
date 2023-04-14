var res ={};
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3,'a', 2, 4, 9, 3];
for (let elements of arr1){
  if (res[elements]=== undefined){
    res[elements] = 1;
  } else{
    res[elements]++;
  }
}
console.log(res);




 







