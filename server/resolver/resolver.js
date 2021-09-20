
// const post = require('../model/post')
// const Author = require('../model/Author')
const controller  =  require('../controller/resolver_controller');

const resolvers = {
	// QUERY
	Query: {
		posts: controller.findPosts,
		postById: controller.query_findPost,
        authors: controller.findAuthors,
		author: controller.query_findAuthor ,
	},
	// post
	Post:{
		author: controller.post_findAuthor,
	},
	// Author
	Author:{
		posts: controller.author_findPost,
	},
	// Mutation
	Mutation:{
		createAuthor:  controller.mutation_createAuthor,
		createPost: controller.mutation_createPost,
	}
} 
module.exports = resolvers
