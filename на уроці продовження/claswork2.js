
const btn = document.querySelector('button');
const nameInput = document.getElementById('text-input');
const usercoment = document.getElementById('user-coment');
btn.addEventListener('click',e =>{
e.preventDefault();
console.log(` ${nameInput.value}, ${usercoment.value}`)
});

