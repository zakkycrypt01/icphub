import dotenv from 'dotenv';
import express from 'express';

import connectDB from './db.js';
import userRouter from './routes/userRouter.js';
import { dot } from 'node:test/reporters';
dotenv.config();

const app = express();

app.use(express.json())
app.use('/api', userRouter);

export default app;