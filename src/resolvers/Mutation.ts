import {IContext} from '../interfaces/Context.interface';
import {
	IPostCreateArgs,
	IPostPayloadType,
} from '../interfaces/Mutations.interface';

export const Mutation = {
	postCreate: async (
		_: any,
		{title, content}: IPostCreateArgs,
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
};
