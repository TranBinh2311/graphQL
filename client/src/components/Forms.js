
import React  from "react";
// import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import PostForms from "./PostForms"
import AuthorForm from "./AuthorForm";

const Forms = ()=>{

    return (
    <Row>
        <Col>
            <PostForms/>
        </Col>
        
        <Col>
            <AuthorForm/>
        </Col>
    </Row>
    )
}

export default Forms