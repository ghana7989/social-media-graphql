import {ApolloServer} from 'apollo-server';
import {Query, Mutation} from './resolvers';
import {typeDefs} from './schema';
import {PrismaClient, Prisma} from '@prisma/client';

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
	errorFormat: 'pretty',
});

const server = new ApolloServer({
	resolvers: {
		Query,
		Mutation,
	},
	typeDefs,
	context: {
		prisma,
	},
});

server.listen().then(({url}) => {
	console.log(`🚀 Server ready at ${url}`);
});
