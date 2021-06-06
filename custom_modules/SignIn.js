import axios from 'axios';
const signinUrl = process.env.USER_LOGIN;

export const validateSignin = async (email, password) => {
	let obj = { isValid: false, credentials: null };
	return axios({
		url: 'http://192.168.1.71:4000/auth/signin',
		method: 'post',
		data: {
			email,
			password
		}
	});
};
