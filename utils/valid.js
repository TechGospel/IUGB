const valid = (firstname, lastname, email, password, cf_password) => {
	if (!firstname) return 'Please add firstname.';

	if (!lastname) return 'Please add all lastname.';

	if (!email || !password) return 'Please add all fields.';

	if (!firstname || !lastname || !email || !password)
		return 'Please add all fields.';

	if (!validateEmail(email)) return 'Invalid emails.';

	if (password.length < 6) return 'Password must be at least 6 characters.';

	if (password !== cf_password) return 'Confirm password did not match.';
};

function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

export default valid;
