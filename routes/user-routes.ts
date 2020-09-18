const express = require('express');
import { UserController } from '../controllers/user-controller';

class UserRoutes {
    public userRouter: any;

    constructor() {
        this.userRouter = express.Router();
        this.userRouter.post('/', UserController.getInfo);
    }
}



const userRoutes = new UserRoutes().userRouter;
export { userRoutes };

