import { useQuery } from "@apollo/client";
import React  , {Fragment } from "react";
import Card from 'react-bootstrap/Card';
import { getPostById } from "../graphql-client/queries";

const PostDetails = ({postId})=>{
    // console.log(postId);
    // console.log("6146df16a95e378465278484");
    let  {loading , err, data} = useQuery(getPostById, {
        variables: {
            id: postId
        },
        skip: postId === null
    })
    if(!data) data = {}
    if (loading) return <p> Loading post detail .. </p>;
    if (postId == null && err)
    {
        console.log(err.message);
        return <p> Error Loading post detail .. </p>;
    }
    // console.log(data.postById); 
    const res = postId !== null ? data.postById : null;

    return (
        <Card bg='info' text = 'white' className = 'shadow'>
            <Card.Body>
                {
                    res ==  null ? (<Card.Text>Please select another Posts </Card.Text> ): 
                    <Fragment>
                        <Card.Title> Title: {res.title}</Card.Title>
                        <Card.Subtitle>Content: {res.content}</Card.Subtitle>
                            <p>Author {res.author.name}</p>
                            <p> Age: {res.author.age}</p>
                            <p>All Post from Author</p>
                            <ul>
                                {res.author.posts.map(kqua => (
                                <li key = {kqua.id}> 
                                    {kqua.title} 
                                </li>
                                ))}
                            </ul>
                    </Fragment>
                }       
            </Card.Body>
        </Card>
    )
}

export default PostDetails