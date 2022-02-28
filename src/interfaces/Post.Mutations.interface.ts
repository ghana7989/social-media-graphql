import {Post} from '@prisma/client';

export interface IPostCreateArgs {
	post: {title: string; content: string};
}
export interface IPostUpdateArgs {
	postId: string;
	post: {title?: string; content?: string};
}
export interface IPostDeleteArgs {
	postId: string;
}
export interface IPostPayloadType {
	userErrors: {
		message: string;
	}[];
	post: Post | null;
}
