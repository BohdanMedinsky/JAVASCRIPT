
const btn = document.querySelector('button');
btn.addEventListener('click', function(event){
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const userComent =document.getElementById('user-coment');
  let day = new Date();
  let trueDay = day.toLocaleDateString();
  // nameInput.value userComent.value
  // 1. знайти html-контейнер в який ми будемо додавати наш коментар
  const container = document.getElementById('comments');
  const h3 = document.createElement('h3');
  h3.textContent = nameInput.value;
  const paragraph_date = document.createElement('p');
  paragraph_date.textContent = trueDay;
  const p = document.createElement('p');
  p.textContent = userComent.value;
  const comment = document.createElement('div');
  comment.className = "coment";
  comment.append(h3, paragraph_date, p); 
  container.prepend(comment);
  userComent.value = '';
  nameInput.value = '';
});



   





 







