import Container from 'react-bootstrap/Container';
import PostList from './components/postList';
import Forms from './components/Forms';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
const client = new ApolloClient({
  uri : 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),

})

function App() {
  return (
    <ApolloProvider client = {client}>
      <Container className='py-3 mt-3' style = {{backgroundColor: 'lightcyan'}}>
        <h1 className = 'text-center text-info mb-3'> My Posts</h1>
        <hr />
           <Forms/>
        <hr />
        <PostList/>
        </Container>
    </ApolloProvider>  
  )
}

export default App
