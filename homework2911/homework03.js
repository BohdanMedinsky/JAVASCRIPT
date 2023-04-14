// підрахунок голосних

//https://youtu.be/fwQjUmILb_k  Цю задачу брав з цього посилання.


function vowelIndices(word){
const vowels='aioeuyAEIOUY';
  const res =[];
  for(let i =0;i <word.length; i++){
if (vowels.includes(word[i])) res.push(i+1)
  }
  return res;
}
console.log(` голосних літер: ${myFunctions.vowelIndices(word)}`);


























