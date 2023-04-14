const btns = document.querySelectorAll("#click , #click1 , #click2");
for (let btn of btns) {
    // Добавляю що саме має відбутись
    btn.onclick = () => {
        // Отримання еленту із блоку
        const text = btn.parentElement.querySelector('.hide-text');
        
        // Змінюється видимість
        text.style.display = (text.style.display === 'none') ? 'block' : 'none';
      
    };
}









/*
document.querySelectorAll("#click , #click1 , #click2")
.forEach(function () {
 btn.onclick = function (e) {
   
    let selector = this.dataset.clearSelector;
    document.querySelectorAll(selector)
    .forEach(function (item) {
      item.value = "";
    });
  };
});
*/