var arr1 = [NaN, 0, 15, false, -22, '', undefined,47, null];
let removeElements = [NaN,false,undefined];
for (let i=0;i<arr1.length;i++){
  const el=arr1[i];
  if (removeElements.includes(el))
  arr1.splice(i,1);
  console.log(arr1);
}





























