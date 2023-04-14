const btn = document.getElementById('btn');
const p = document.getElementById('result');
btn.addEventListener("click",()=> p.textContent = Math.floor(Math.random()*100));

