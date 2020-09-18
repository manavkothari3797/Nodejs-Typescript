
const _ = require('lodash');
const debug = require('debug')('NE:Utils');

export class Utils {

    constructor() {
    }

    static trimParams(req: any, res: any, next: any) {
        debug('Inside trimParams');
       
        return next();
    }

    static sendResponse(res: any, responseObj: any) {
        debug('response',responseObj);
        return res.status(200).json(responseObj);
    }

    static sendError(res: any, statusCode: number, message: string) {
        return res.status(statusCode).json({
            message: message
        });
    }
}

