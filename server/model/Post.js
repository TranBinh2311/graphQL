const mongoose =  require('mongoose');
const Schema = mongoose.Schema

const postSchema = {
    title: {
        type :String
    },
    created_at:{
        type: String
    },
    updated_at:{
        type: String
    },
    content:
    {
        type : String
    },
    authorId:
    {
        type : String
    }
}

module.exports = mongoose.model('posts',postSchema);