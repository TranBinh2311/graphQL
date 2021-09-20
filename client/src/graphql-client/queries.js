import {gql} from '@apollo/client'

const getPosts = gql`
    query getPostQuery{
        posts {
        id
        title
        content
        } 
    }


`
const getPostById = gql`

query MyQuery ($id: ID) {
    postById(id : $id) {
      id
      title
      content
      author {
        name
        age
        posts{
          id
          title
          content
        }  
      }
    }
  }
`

const getAuthors = gql`
    query getAuthors{
        authors {
        id
        name
        age
        } 
    }
`

export {getPosts, getPostById, getAuthors}