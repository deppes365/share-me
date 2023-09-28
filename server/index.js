import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/v1/user', userRoutes)

mongoose.set('strictQuery', false);

mongoose
	.connect(`${process.env.MONGO_URL}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server listening on port ${PORT}`);
		});
	})
	.catch(error => console.log(error.message));


