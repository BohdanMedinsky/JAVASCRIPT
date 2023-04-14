
const btns = document.querySelectorAll('button');
for (let btn of btns) {
    // Добавляю що саме має відбутись
    btn.onclick = () => {
        // Отримання еленту із блоку
        const text = btn.parentElement.querySelector('.hide-text');
        // Змінюється видимість
        text.style.display = (text.style.display === 'none') ? 'block' : 'none';
    };
}





