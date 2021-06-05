import axios from 'axios';
const signinUrl = process.env.USER_LOGIN;

export const validate = async (req, email, password, res) => {
	let obj = { isValid: false, credentials: null };
	axios({
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
					obj.isValid = true;
					obj.credentials = {
						id: response.data.id,
						rev: response.data.rev,
						email: response.data.email,
						isAdmin: response.data.isAdmin,
						token: response.data.token
					};
					break;

				default:
					obj.isValid = false;
					obj.credentials = null;
					break;
			}
		})
		.catch((err) => {
			console.log(err);
			obj.isValid = false;
			obj.credentials = null;
		});
	return obj;
};
