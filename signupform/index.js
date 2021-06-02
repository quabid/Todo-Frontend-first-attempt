import Path from 'path';

const __dirname = Path.resolve('.');

const registration = {
	register: (server, options) => {
		server.route({
			method: 'GET',
			path: '/signup',
			handler: (req, res) => {
				return res.view('landing/signup', { title: 'Sign Up' });
			}
		});
	},
	pkg: {
		name: 'registration'
	}
};

export default registration;
