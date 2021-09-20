const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const cors = require('cors')

//Load db method

const mongoDataMethods =  require('./model/Database');


// connect to Mongoose DB
const connectDB = async () =>{
	try {
		await mongoose.connect('mongodb+srv://binh-web-dev:1234@tutorialgraphql.dmr1p.mongodb.net/TutorialGraphQL?retryWrites=true&w=majority', {
			//useCreateIndex : true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			//useFindAndModify: false,
		})

		console.log("MongoDB connected");
		
	} catch (error) {
		console.log(error.message);
		process.exit(1)
	}
}

connectDB();
// Load schema & resolvers
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: () => ({ mongoDataMethods })  
})



const app = express()
app.use(cors())
let temp = async ()=>{
    await server.start();
    server.applyMiddleware({ app });
}

temp();

app.listen({ port: process.env.PORT || 4000 }, () =>
	console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
)