const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class Article {
    ARTICLE: any;
    constructor() {
        this.ARTICLE = mongoose.model('article', new Schema({
            title: String,
            description: String,
            id: Number
        }));
    }
}

const ARTICLE = new Article().ARTICLE;
export { ARTICLE };