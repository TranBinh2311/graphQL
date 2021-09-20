import {gql} from '@apollo/client'

const addNewPost = gql`
    mutation addNewPost(
        $title: String, 
        $content: String,
        $authorId: ID)
    {
        createPost(title: $title, content: $content, authorId: $authorId)
        {
            id
            title
            content
        }
    }
`


const addNewAuthor = gql`
    mutation addNewPost(
        $name: String, 
        $age: Int)
    {
        createAuthor( name: $name, age: $age)
        {
            id
            name
            age
        }
    }
`

export {addNewPost, addNewAuthor }
