import {gql} from 'apollo-server';

export const typeDefs = gql`
	type Query {
		posts: [Post!]!
	}

	type Mutation {
		postCreate(post: PostInput!): PostPayload!
		postUpdate(postId: ID!, post: PostInput!): PostPayload
		postDelete(postId: ID!): PostPayload
		signup(
			email: String!
			name: String!
			password: String!
			bio: String
		): AuthPayload!
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
	type AuthPayload {
		userErrors: [UserError!]!
		user: User
	}
	type UserError {
		message: String!
	}
	input PostInput {
		title: String
		content: String
	}
`;
