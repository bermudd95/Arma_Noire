const sendEmail = (e) => {
	e.preventDefault();

	emailjs
		.sendForm("service_u2f5wlu", "template_oq0mgol", {
			publicKey: "dkSCkT9G1nrflBiqD",
		})
		.then(
			(result) => {
				console.log("SUCCESS!", result.text);
				// Optionally, you can show a success message to the user
			},
			(error) => {
				console.log("FAILED...", error.text);
				// Optionally, you can show an error message to the user
			},
		);

	// Clear form after submission
	e.target.reset();
};

export default sendEmail;
