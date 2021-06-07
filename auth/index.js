import basic from '@hapi/basic';
import cookie from '@hapi/cookie';
import { validate } from './service.js';

const auth = {
	register: async (server) => {
		await server.register(basic);
		await server.register(cookie);
		server.auth.strategy('simple', 'basic', { validate: validate });
		server.auth.strategy('session', 'cookie', {
			cookie: {
				name: 'userId',
				password: 'password-should-be-32-characters',
				isSecure: false
			},
			redirectTo: '/signin',
			appendNext: true,
			validateFunc: async (request, session) => {
				return { valid: true, credentials: {} };
			}
		});
		// server.auth.default('session');
	},
	pkg: {
		name: 'auth'
	}
};

export default auth;
