document.addEventListener('DOMContentLoaded', e => {
	document.forms.form01.addEventListener('submit', e => {
		e.preventDefault();
		let formdata = new FormData(e.target);

	fetch('/upload', {
		method: 'POST',
		body: formdata
	})
		.then(response => response.json())
		.then(result => {
			console.log('Success:', result);
			e.target.reset();
		});
	});
});