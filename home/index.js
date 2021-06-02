import Path from 'path';

const __dirname = Path.resolve('.');

const home = {
	register: (server, options) => {
		server.route({
			method: 'GET',
			path: '/{filename*}',
			handler: {
				directory: {
					path: __dirname + '/public',
					listing: false,
					index: false
				}
			}
		});
		server.route({
			method: [ 'GET' ],
			path: '/',
			handler: (req, res) => {
				return res.view('landing/home', { title: 'Home' });
			}
		});
	},
	pkg: {
		name: 'home'
	}
};

export default home;
