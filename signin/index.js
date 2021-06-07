import Joi from 'joi';

const signin = {
	register: async (server, options) => {
		server.route({
			method: 'POST',
			path: '/signin',
			config: {
				auth: 'simple',
				validate: {
					payload: Joi.object({
						email: Joi.string().email().required(),
						password: Joi.string().label('Password ').required()
					}),
					failAction: (req, res, err) => {
						console.log(err.message);
						// throw err.message;
						return res.view('landing/signin', { title: 'Sign In', error: err.message });
					}
				}
			},
			handler: (req, res) => {
				const { email, password } = req.payload;
				console.log(req.auth.credentials);
				if (req.auth.isAuthenticated) {
					req.cookieAuth.set({
						userId: req.auth.credentials.id,
						userRev: req.auth.credentials.rev,
						userToken: req.auth.credentials.token
					});
				}
				return res.view('landing/home', { title: 'Signed In', user: req.auth.credentials });
			}
		});

		server.route({
			method: 'GET',
			path: '/signin',
			handler: (req, res) => {
				return res.view('landing/signin', { title: 'Sign In' });
			}
		});
	},
	pkg: {
		name: 'signin'
	}
};

export default signin;
