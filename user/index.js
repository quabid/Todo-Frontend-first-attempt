const user = {
	register: (server, options) => {
		server.route({
			method: [ 'GET' ],
			path: '/user',
			config: {
				auth: 'session'
			},
			handler: (req, res) => {
				console.log(`User's Dashboard ${JSON.stringify(req.auth.credentials)}`);
				return res.view('user/dashboard', {
					title: 'Dashboard',
					user: {
						email: req.auth.credentials.userEmail,
						token: req.auth.credentials.userToken
					}
				});
			}
		});
	},
	pkg: {
		name: 'user'
	}
};

export default user;
