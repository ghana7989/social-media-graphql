import {Post, PrismaPromise} from '@prisma/client';
import {IContext} from '../interfaces/Context.interface';

export const Query = {
	posts: (_: any, __: any, {prisma}: IContext): PrismaPromise<Post[]> => {
		return prisma.post.findMany({
			orderBy: [{createdAt: 'desc'}],
		});
	},
};
