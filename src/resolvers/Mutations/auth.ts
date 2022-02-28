import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import {
	ISignupArgs,
	IUserPayload,
} from '../../interfaces/Auth.Mutations.interface';
import {IContext} from '../../interfaces/Context.interface';

export const authResolvers = {
	signup: async (
		_: any,
		{email, name, password, bio = ''}: ISignupArgs,
		{prisma}: IContext,
	): Promise<IUserPayload> => {
		if (!isEmail(email)) {
			return {
				userErrors: [
					{
						message: 'Email is not valid',
					},
				],
				user: null,
			};
		}
		const isValidPassword = isLength(password, {min: 8});
		if (!isValidPassword) {
			return {
				userErrors: [
					{
						message: 'Password must be at least 8 characters',
					},
				],
				user: null,
			};
		}

		if (!name) {
			return {
				userErrors: [
					{
						message: 'Name is required',
					},
				],
				user: null,
			};
		}

		return {
			userErrors: [],
			user: null,
		};
	},
};
