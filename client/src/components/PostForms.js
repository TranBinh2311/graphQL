import React, {useState}  from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useQuery , useMutation } from "@apollo/client";
import { getAuthors, getPosts } from "../graphql-client/queries";
import { addNewPost } from "../graphql-client/mutations";


const PostForms = () => {
    const [newPost, setNewPost] = useState({
        title: '',
        content: '',
        authorId: '',
    })

    const {title, content, authorId} = newPost;

    const onInputChange = event =>{
        setNewPost({
           ...newPost,
           [event.target.name]: event.target.value,
        })
    }

    const onSubmit = event =>{
        event.preventDefault()
        addPost({
            variables: {title, content, authorId},
            refetchQueries: [{query: getPosts}]
        })

        setNewPost({title:'', content: '' , authorId:''})
        //console.log(newPost);
        //console.log(title);
    }
    //GraphQL operations
    const {loading , err, data } = useQuery(getAuthors);
    const [addPost, dataMutation] = useMutation(addNewPost);

    console.log(dataMutation);

    if(err) return <p> Loading author Error </p>
    return ( 
        <Form onSubmit = {onSubmit}>
                <Form.Group>
                    <Form.Control 
                    type = 'text' 
                    placeholder = 'Post title' 
                    name = 'title' 
                    onChange ={onInputChange}  
                    value = {title}
                    required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control 
                    type = 'text' 
                    placeholder = 'Post content' 
                    name = 'content' 
                    onChange = {onInputChange} 
                    value = {content}
                    required
                    />
                </Form.Group>

                <Form.Group>
                    {loading ? 
                        (<p> Loading authors</p> 
                    ): (
                    <Form.Control 
                        as= 'select' 
                        placeholder = 'Select author' 
                        name = 'authorId' 
                        onChange = {onInputChange} 
                        value = {authorId}
                    >
                        <option value='' disabled>
                            Select Author
                        </option>
                        {data.authors.map( author => 
                            <option key = {author.id} value = {author.id}>
                                 {author.name}  
                            </option>
                        )}
                    </Form.Control>)
                    }
                    
                </Form.Group>
                <Button className = 'float-right' variant = 'info'  type = 'submit' >
                    Creat New Post
                </Button>
        </Form>
       )
}

export default PostForms 