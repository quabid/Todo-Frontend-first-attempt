'use strict';

import Glue from '@hapi/glue';
import Path from 'path';
import manifest from './manifest.js';

const __dirname = Path.resolve('.');

const options = {
	relativeTo: __dirname
};

const startServer = async function() {
	try {
		const server = await Glue.compose(manifest, options);
		await server.start();
		// console.clear();
		console.log(`\n\n\t\tServer started on port ${manifest.server.port}\n\n`);
	} catch (err) {
		console.error(err.status);
		process.exit(1);
	}
};

startServer();
