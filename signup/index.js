import Joi from 'joi';

const signupform = {
	register: (server, options) => {
		server.route({
			method: [ 'POST' ],
			path: '/register',
			config: {
				validate: {
					payload: Joi.object({
						email: Joi.string().email().required(),
						pwd1: Joi.string().min(6).label('Password ').required(),
						pwd2: Joi.string().valid(Joi.ref('pwd1')).label("Passwords don't match").required(),
						fname: Joi.string().required(),
						lname: Joi.string().required(),
						gender: Joi.string().required()
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
		name: 'signupform'
	}
};

export default signupform;
