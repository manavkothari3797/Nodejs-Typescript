const express = require('express');
import { userRoutes } from './user-routes';

class Router {
    public router: any;

    constructor() {
        this.router = express.Router();
        this.router.use('/user', userRoutes);
    }
}

const router = new Router().router;
export { router };
