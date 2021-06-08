import Joi from 'joi';
import Axios from 'axios';

const addtodo = {
	register: (server, options) => {
		server.route({
			method: 'POST',
			path: '/todos/add',
			config: {
				auth: 'session',
				validate: {
					payload: Joi.object({
						title: Joi.string().required(),
						body: Joi.string().required(),
						startdate: Joi.any().allow(''),
						enddate: Joi.any().allow('')
					}),
					failAction: (req, res, err) => {
						console.log(err.message);
						return res.view('user/dashboard', { title: 'Dashboard', error: err.message });
					}
				}
			},
			handler: (req, res) => {
				const payload = req.payload;
				return Axios({
					method: 'post',
					url: 'http://192.168.1.71:4000/api/todos/add',
					data: {
						payload
					},
					headers: {
						Authorization: `Bearer ${req.auth.credentials.userToken}`
					}
				})
					.then((data) => {
						console.log(data.data);
						return res.redirect('/user');
					})
					.catch((err) => {
						console.log(err);
						return res.redirect('/user');
					});
			}
		});
	},
	pkg: {
		name: 'addtodo'
	}
};

export default addtodo;
