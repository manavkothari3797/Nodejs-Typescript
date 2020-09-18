const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class User {
    USER: any;
    constructor() {
        this.USER = mongoose.model('user', new Schema({
            name: String,
            email: String,
            id: Number
        }));
    }
}

const USER = new User().USER;
export { USER };