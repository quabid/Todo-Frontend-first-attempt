import Joi from 'joi';

const signupform = {
	register: (server, options) => {
		server.route({
			method: [ 'POST' ],
			path: '/signup',
			config: {
				validate: {
					payload: Joi.object({
						email: Joi.string().email().required(),
						pwd1: Joi.string().min(6).label('Password ').required(),
						pwd2: Joi.string().valid(Joi.ref('pwd1')).label("Passwords don't match").required(),
						fname: Joi.string()
							.pattern(/^[a-zA-Z]+$/)
							.label('First name must contain letters only')
							.required(),
						lname: Joi.string()
							.pattern(/^[a-zA-Z]+$/)
							.label('Last name must contain letters only')
							.required(),
						gender: Joi.string().pattern(/^[a-zA-Z]+$/).label('Gender must contain letters only').required()
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

		server.route({
			method: 'GET',
			path: '/signup',
			handler: (req, res) => {
				return res.view('landing/signup', { title: 'Sign Up' });
			}
		});
	},

	pkg: {
		name: 'signupform'
	}
};

export default signupform;
