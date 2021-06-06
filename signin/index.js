import Joi from 'joi';

const signin = {
	register: async (server, options) => {
		server.route({
			method: 'POST',
			path: '/signin',
			config: {
				validate: {
					payload: Joi.object({
						email: Joi.string().email().required(),
						password: Joi.string().label('Password ').required()
					}),
					failAction: (req, res, err) => {
						console.log(err.message);
						// throw err.message;
						return res.view('signin', { title: 'Sign In', error: err.message });
					}
				}
			},
			handler: (req, res) => {
				return req.payload;
			}
		});

		server.route({
			method: 'GET',
			path: '/signin',
			handler: (req, res) => {
				return res.view('signin', { title: 'Sign In' });
			}
		});
	},
	pkg: {
		name: 'signin'
	}
};

export default signin;
