const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type Post {
		id: ID
		title: String
		created_at: String
		updated_at: String
		content: String
		author: Author
		#name: String
		#genre: String
		
	}

	type Author {
		id: ID!
		name: String
		age: Int
		posts: [Post]
		# books: [Book]
	}

	# ROOT TYPE
	type Query {
		posts: [Post]
		postById(id: ID): Post
		authors: [Author]
		author(id: ID!): Author
	}

	type Mutation {
		createAuthor( name: String, age: Int): Author
		createPost( title:String ,created_at: String, updated_at: String content: String, authorId: ID) : Post
	} 
`

module.exports = typeDefs
