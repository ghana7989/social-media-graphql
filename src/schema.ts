import {gql} from 'apollo-server';

export const typeDefs = gql`
	type Query {
		hello: String
	}

	type Mutation {
		postCreate(title: String!, content: String!): PostPayload!
		# postDelete(id: ID!): void
	}

	type Post {
		id: ID!
		title: String!
		content: String!
		createdAt: String!
		published: Boolean!
		user: User!
	}

	type User {
		id: ID!
		name: String!
		email: String!

		posts: [Post!]!
		profile: Profile!
	}
	type Profile {
		id: ID!
		user: User!
	}

	type PostPayload {
		userErrors: [UserError!]!
		post: Post
	}
	type UserError {
		message: String!
	}
`;
