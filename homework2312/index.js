const url_users = "https://jsonplaceholder.typicode.com/users";

let xhr = new XMLHttpRequest();

xhr.open("GET", url_users);
xhr.send();
xhr.onerror = function () { alert(`Помилка`);};
xhr.onload = function() {
    if (xhr.status != 200) {
        alert('Статус коду : 200.Вибачайте(');
    } else {
        let users= JSON.parse(xhr.response);
        if (users.length) {
            buildUsersLists(document.getElementById('users'),users);
        }
    }
};

function buildUsersLists(container, users) {
   users.forEach(function(user) {
        const h5 = document.createElement('h5');
        h5.textContent = user.name;

        const div = document.createElement('div');
        div.classList.add("user");
        div.appendChild(h5);
        container.appendChild(div);
    });
}