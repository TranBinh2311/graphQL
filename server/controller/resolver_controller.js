const Author = require("../model/Author");
const Post = require("../model/Post");
const mongoDataMethods = require('../model/Database');

module.exports.findPosts = async (parent, agrs , context)=>{
	return await context.mongoDataMethods.getAllPosts();
}

module.exports.findAuthors = async (parent, agrs , context)=>{
	return await context.mongoDataMethods.getAllAuthors();
}
module.exports.query_findPost = async (parent, {id}, {mongoDataMethods}) =>{
	return await mongoDataMethods.getPostById(id)
};
module.exports.query_findAuthor = async (parent, {id}, {mongoDataMethods}) =>{
	return await mongoDataMethods.getAuthorById(id)
};

module.exports.post_findAuthor =  async ({authorId}, agrs, {mongoDataMethods}) =>{
	return await mongoDataMethods.getAuthorById(authorId);
};

module.exports.author_findPost =  async ({id}, agrs, {mongoDataMethods}) =>{
	return await mongoDataMethods.getAllPosts({authorId: id});
};

module.exports.mutation_createAuthor  =  async (parent, agrs , {mongoDataMethods}) => 
{
	return await mongoDataMethods.createAuthor(agrs);
}

module.exports.mutation_createPost = async (parent, agrs , {mongoDataMethods}) => 
{
	return  await mongoDataMethods.createPost(agrs);
}