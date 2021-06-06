import inert from '@hapi/inert';
import handlebars from 'handlebars';
import dotenv from 'dotenv';
import auth from './auth/index.js';
import home from './home/index.js';
import signup from './signup/index.js';
import signin from './signin/index.js';
import Path from 'path';

dotenv.config();

const __dirname = Path.resolve('.');

const manifest = {
	server: {
		port: '3000',
		routes: {
			files: {
				relativeTo: Path.join(__dirname, 'public')
			}
		}
	},
	register: {
		plugins: [
			{
				plugin: inert
			},
			{
				plugin: '@hapi/vision',
				options: {
					engines: {
						hbs: handlebars
					},
					path: Path.resolve(__dirname, 'views'),
					layout: true,
					layoutPath: 'views/layouts',
					partialsPath: 'views/partials',
					helpersPath: 'views/helpers'
				}
			},
			{
				plugin: auth
			},
			{
				plugin: signin
			},
			{
				plugin: home
			},
			{
				plugin: signup
			}
		]
	}
};

export default manifest;
