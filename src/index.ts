import {ApolloServer} from 'apollo-server';
import {Query} from './resolvers';
import {typeDefs} from './schema';

const server = new ApolloServer({
	resolvers: {
		Query,
	},
	typeDefs,
});
server.listen().then(({url}) => {
	console.log(`🚀 Server ready at ${url}`);
});
