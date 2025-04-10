const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    description: String,
    dateCreated: { 
        type: Date, 
        default: Date.now 
    }   
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;