const Post = require('./Post')
const Author = require('./Author')


const mongoDataMethods = {
    getAllPosts: async (condition = null) => condition === null ? await Post.find() : await Post.find(condition) ,
    getAllAuthors: async () => await Author.find(),
    createAuthor : async agrs =>{
        const newAuthor = new Author(agrs)
        return await newAuthor.save() ;
    },
    createPost : async agrs => {
        const newPost = new Post(agrs);
	    return await newPost.save() ;
    },
    getPostById : async id => await Post.findById(id),
    getAuthorById : async id => await Author.findById(id)
}


module.exports = mongoDataMethods