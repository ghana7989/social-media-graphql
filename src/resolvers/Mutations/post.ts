import {IContext} from '../../interfaces/Context.interface';
import {
	IPostCreateArgs,
	IPostPayloadType,
	IPostUpdateArgs,
	IPostDeleteArgs,
} from '../../interfaces/Post.Mutations.interface';

export const postResolvers = {
	postCreate: async (
		_: any,
		{post: {title, content}}: IPostCreateArgs,
		{prisma}: IContext,
	): Promise<IPostPayloadType> => {
		if (!title || !content)
			return {
				userErrors: [
					{
						message: 'Title and content are required.',
					},
				],
				post: null,
			};
		const post = await prisma.post.create({
			data: {
				title,
				content,
				authorId: 1,
			},
		});
		return {post, userErrors: []};
	},
	postUpdate: async (
		_: any,
		{postId, post: {title, content}}: IPostUpdateArgs,
		{prisma}: IContext,
	): Promise<IPostPayloadType> => {
		if (!title || !content) {
			return {
				userErrors: [
					{
						message: 'Need to have either Title or Content to update a post',
					},
				],
				post: null,
			};
		}
		// finding an unique post
		const existingPost = await prisma.post.findUnique({
			where: {
				id: +postId,
			},
		});

		if (!existingPost) {
			return {
				userErrors: [
					{
						message: 'post you are trying to update does not exist',
					},
				],
				post: null,
			};
		}

		const post = await prisma.post.update({
			where: {
				id: +postId,
			},
			data: {
				title: title || existingPost.title,
				content: content || existingPost.content,
			},
		});
		return {post, userErrors: []};
	},
	postDelete: async (_: any, {postId}: IPostDeleteArgs, {prisma}: IContext) => {
		const existingPost = await prisma.post.findUnique({
			where: {
				id: +postId,
			},
		});

		if (!existingPost) {
			return {
				userErrors: [
					{
						message: 'post you are trying to update does not exist',
					},
				],
				post: null,
			};
		}

		const post = await prisma.post.delete({
			where: {
				id: +postId,
			},
		});
		return {post, userErrors: []};
	},
};
