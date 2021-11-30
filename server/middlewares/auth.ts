import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User, { UserInterface } from '../models/user';

interface IRequest extends Request {
	user?: UserInterface;
}

const protect = asyncHandler(async (req: IRequest, res, next) => {
	let token;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		try {
			// eslint-disable-next-line prefer-destructuring
			token = req.headers.authorization.split(' ')[1];
			const decoded = jwt.verify(token, process.env.SECRET as jwt.Secret);

			const user = await User.findById(decoded).select('-password');
			if (user) {
				req.user = user;
			}
			next();
		} catch (error) {
			// console.error(error);
			res.status(401);
			throw new Error('Not Authorized, token failed!');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not Authorized, No token');
	}

	// next()
});

const admin = (req: IRequest, res: Response, next: NextFunction): void => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error('Not Authorized as admin');
	}
};

export { protect, admin };
