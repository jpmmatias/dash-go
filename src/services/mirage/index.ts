import { createServer, Model, Factory } from 'miragejs';
import faker from '@withshepherd/faker';
interface User {
	name: string;
	email: string;
	created_at: string;
}

export function makeServer() {
	const server = createServer({
		models: {
			user: Model.extend<Partial<User>>({}),
		},
		factories: {
			user: Factory.extend({
				name() {
					return faker.name.findName();
				},
				email() {
					return faker.internet.email().toLowerCase();
				},
				createdAt() {
					return faker.date.recent();
				},
			}),
		},
		seeds(server) {
			server.createList('user', 10);
		},
		routes() {
			this.namespace = 'api';
			this.timing = 750;

			this.get('/users');
			this.post('/users');

			this.namespace = '';
			this.passthrough();
		},
	});

	return server;
}