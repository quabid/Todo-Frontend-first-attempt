import axios from 'axios';
const signinUrl = process.env.USER_LOGIN;

export const validate = async (req, email, password, res) => {
	return axios({
		url: 'http://192.168.1.71:4000/auth/signin',
		method: 'post',
		data: {
			email,
			password
		}
	})
		.then((response) => {
			console.log(`Response Status:\t${response.status}`);
			switch (response.status.toString()) {
				case '200':
					console.log(`\n\tResponse Data: ${JSON.stringify(response.data)}\n`);
					return {
						isValid: true,
						credentials: response.data
					};

				default:
					return {
						isValid: false
					};
			}
		})
		.catch((err) => {
			return {
				isValid: false
			};
		});
};
