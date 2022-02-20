import {Post} from '@prisma/client';

export interface IPostCreateArgs {
	title: string;
	content: string;
}
export interface IPostPayloadType {
	userErrors: {
		message: string;
	}[];
	post: Post | null;
}
