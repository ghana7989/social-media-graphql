export interface ISignupArgs {
	name: string;
	email: string;
	password: string;
	bio?: string;
}

export interface IUserPayload {
	userErrors: {
		message: string;
	}[];
	user: null;
}
