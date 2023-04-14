
		function validateForm() {
			var username = document.forms["login-form"]["username"].value;
			var password = document.forms["login-form"]["password"].value;

			if (username == "" || password == "") {
				alert("Будь ласка, заповніть всі поля форми.");
				return false;
			}
		}

		var form = document.getElementById("login-form");

		form.addEventListener("submit", function(event) {
			event.preventDefault();

			var username = form.elements["username"].value;
			var rememberMe = form.elements["remember-me"].checked;

			if (rememberMe) {
				localStorage.setItem("username", username);
			} else {
				localStorage.removeItem("username");
			}

			var loginStatus = document.getElementById("login-status");

			if (username) {
				loginStatus.textContent = "Привіт, " + username + "! Я тебе запам'ятав.";
			} else {
				loginStatus.textContent = "Будь ласка, введіть ім'я користувача.";
				loginStatus.className = "error";
			}
		});

		var savedUsername = localStorage.getItem("username");

		if (savedUsername) {
			document.getElementById("username").value = savedUsername;
			document.getElementById("remember-me").checked = true;
		}
	




  