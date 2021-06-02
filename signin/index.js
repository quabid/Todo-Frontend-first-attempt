import Joi from 'joi';

const signin = {
	register: (server, options) => {
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
						throw err;
					}
				}
			},
			handler: (req, res) => {
				return req.payload;
			}
		});
	},
	pkg: {
		name: 'signin'
	}
};

export default signin;
