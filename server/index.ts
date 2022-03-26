/* eslint-disable no-console */
import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';
import { connect, set } from 'mongoose';
import cors from 'cors';
import userRouter from './routes/user';
import productRouter from './routes/product';

const app = express();
config();
app.use(json({ limit: '30mb' }));
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/user', userRouter);
app.use('/products', productRouter);
const PORT = process.env.PORT || 5000;
connect(process.env.CONNECTION_URL ?? '', {
	useUnifiedTopology: true,
	useNewUrlParser: true,
})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`SERVER is running on port:${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});

set('useFindAndModify', false);
