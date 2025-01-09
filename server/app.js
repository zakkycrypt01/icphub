import dotenv from 'dotenv';
import express,{json} from 'express';
import cors from 'cors';

import userRouter from './routes/userRouter.js';

dotenv.config();

const corsOptions = {
    origin: true,
    credentials: true,
    preflightContinue: true,
};
const app = express();
app
    .use(cors(corsOptions))
    .use(json())
    // .use(
    //     cookieSession({
    //         httpOnly: true,
    //         signed: false,
    //         secure:false,
    //         maxAge: 24 * 60 * 60 * 5000,
    //     })
    // )
    // .use(passport.initialize())
    // .use(passport.session())
    .use("/api", userRouter);




export default app;