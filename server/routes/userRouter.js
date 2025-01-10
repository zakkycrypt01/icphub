import {Router} from 'express';
import UserController from '../controllers/user.controller.js';   
const userRouter = Router();
userRouter
    .post('/talent/signup', UserController.httpAddtalent)
    .post('/company/signup', UserController.httpAddcompany)
    .post('/postbounty', UserController.httpPostbounty)
    .post('/bounties/:id/submitbounty', UserController.httpSubmitbounty)
    .post('/postevent', UserController.httpPostevent)
    .post('/invite', UserController.httpStoreinvites)
    .get('/bounties', UserController.httpGetbounties)
    .get('/bounties/:id', UserController.httpGetbounty)
    .get('/talents', UserController.httpGettalents)
    .get('/talents/:telegramId', UserController.httpGettalent)  
    .get('/userbounties', UserController.httpGetuserbounties)
    .get('/events', UserController.httpGetevents)



export default userRouter;