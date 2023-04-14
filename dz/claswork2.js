
	const form = document.querySelector('form');
	form.addEventListener('submit', function(event) {
		event.preventDefault(); // Відмінити стандартну поведінку форми

		// Отримати значення полів форми
		const email = document.getElementById('email').value;
		const login = document.getElementById('login').value;
		const password = document.getElementById('password').value;
		const confirmPassword = document.getElementById('confirm-password').value;

		if (password !== confirmPassword) {
			alert("Паролі не співпадають");
			return;
		}

		// Надіслати лист із підтвердженням на вказану пошту
		alert(`На ${email} надіслано лист із підтвердженням`);
	});
