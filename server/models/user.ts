import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;
export interface UserInterface {
	name: string;
	email: string;
	password?: string;
	isAdmin?: string;
}
const userSchema = new Schema<UserInterface>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{ timestamps: true }
);
const User = model<UserInterface>('User', userSchema);

export default User;
