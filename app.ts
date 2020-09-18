const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const Debug = require('debug');
const debug = Debug('NE:SERVER');
import { Utils } from './utils/utils';
import { router } from './routes/routes';
import { Db_schema } from './db';

class App {
    public app: any;
    private server: any;
    private port: number | string;
    private DB: Db_schema;

    constructor() {
        // Creating app instance
        this.app = express();

        // Handlling cors issue
        this.app.use(cors({ origin: true }));

        // Cookie parser
        this.app.use(cookieParser());

        // URL
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // Creating Db
        this.DB = new Db_schema();

        // Json body parser
        this.app.use(bodyParser.json());

        // Trims the spaces
        this.app.use(Utils.trimParams);

        // Defaulte to check server is connected
        this.app.use('/', (req: any, res: any, next: any) => {
            // res.json({ message: 'SERVER CONNECTED' });
            next();
        });

        // Routes
        this.app.use(router);

        // Port
        this.port = 3000 || process.env.port;

        // Listning on port 3000 or process.env.port
        this.server = this.app.listen(this.port, function () {
            debug('server listning...');
        });

        // Catches the uncaught exception
        process.on('uncaughtException', function (error) {
            // Handle the error safely
            debug('Inside uncaughtException');
            debug(error);
            return error;
        });
    }
}

// Creating the instance of app class
exports.app = new App();
