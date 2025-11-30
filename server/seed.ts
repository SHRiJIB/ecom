/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.CONNECTION_URL ?? '', {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error!!'));
db.once('open', () => {
	console.log('MONGO IS ONNN!!!');
});

const MOCK_API_URL = process.env.MOCK_API_CALL ?? '';
const seedDatabase = async () => {
	try {
		const res = await fetch('https://fakestoreapi.com/products');
		console.log(res, ' response');
	} catch (error) {
		console.error('errors');
	}
};

seedDatabase().then((res) => console.log(res, 'res'));
