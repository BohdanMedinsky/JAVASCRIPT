
	const form = document.querySelector('form');
	form.addEventListener('submit', function(event) {
		event.preventDefault();

		const name = form.elements['name'].value;
		const surname = form.elements['surname'].value;
		const dob = form.elements['dob'].value;
		const gender = form.elements['gender'].value;
		const country = form.elements['country'].value;
		const city = form.elements['city'].value;
		const skill = Array.from(form.elements['skill']).filter((element) => element.checked).map((element) => element.value);

		const output = `Name: ${name}\nSurname: ${surname}\nDate of Birth: ${dob}\nGender: ${gender}\nCountry: ${country}\nCity: ${city}\nSkills: ${skill.join(', ')}`;

		alert(output);
	});
