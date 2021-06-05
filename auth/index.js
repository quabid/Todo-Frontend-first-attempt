import basic from '@hapi/basic';
import { validate } from './service.js';

const auth = {
	register: async (server) => {
		await server.register(basic);
		server.auth.strategy('simple', 'basic', { validate: validate });
	},
	pkg: {
		name: 'auth'
	}
};

export default auth;
