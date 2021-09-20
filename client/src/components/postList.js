import React , {useState} from "react";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from "react-bootstrap/esm/Container";
import PostDetails from './postDetails'

import { useQuery } from "@apollo/client";
import { getPosts } from "../graphql-client/queries";



const PostList = () =>{

    const [postSelected, setPostSelected] = useState(null);

    const {loading,err, data} = useQuery(getPosts)
    if(loading) return <p> Loading posts ...</p>
    if(err) return <p>Error loading post!!!!!!</p>


    return <Row>
        <Col xs = {8}>
            <CardColumns>    
                {
                    data.posts.map(res => 
                    <Card border='info' 
                    text= 'info' 
                    className='text-center shadow' 
                    key = {res.id}
                    onClick = {setPostSelected.bind(this, res.id)}>
                    <Card.Body>{res.title}</Card.Body>
                    </Card>)
                }
            </CardColumns>
        </Col>
        <Col>
            <PostDetails postId = {postSelected}/>
        </Col>
    </Row>
    
}

export default PostList