const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const authorSchema = {
    name: {
        type :String
    },
    age:
    {
        type: Number
    }
}

module.exports = mongoose.model('authors',authorSchema);