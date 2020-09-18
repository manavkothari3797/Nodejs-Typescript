const mongoose = require('mongoose');
const debug = require('debug')('NE:DB');

export class Db_schema {
    constructor() {
        Db_schema.connectDb();
    }

    static async connectDb() {
        try {
            await mongoose.connect('mongodb://localhost/MeanBlog_db', { useNewUrlParser: true });
            debug('db connected...');
        } catch (e) {
            debug('db connection problem', e);
        }
    }
}
