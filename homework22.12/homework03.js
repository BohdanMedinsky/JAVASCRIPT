const btn = document.querySelector('button');
btn.addEventListener('click', function (event) {
    event.preventDefault();
    const txtarea = document.getElementById('content');
    const result = document.getElementById('result');
    const checkboxes = document.querySelectorAll('div#checkboxes input[type=checkbox]:checked');
    const radio = document.querySelectorAll('div#radiobuttons input[type=radio]:checked');
    const p = document.createElement('p');
    p.textContent = txtarea.value;
    if (checkboxes.length>0) {
        checkboxes.forEach(checkbox => {
            p.style[checkbox.name] = checkbox.value;
        });
    }
    if (radio.length>0) {
        radio.forEach(radio => {
            p.style[radio.name] = radio.value;
        });
    }
    result.append(p);
    txtarea.value ='';
});








