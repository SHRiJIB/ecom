import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const userSchema = new Schema(
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
	},
	{ timestamps: true }
);
const User = model('User', userSchema);

export default User;
