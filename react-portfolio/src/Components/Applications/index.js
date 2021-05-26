import React from 'react';
import { Card, CardGroup, Container } from "react-bootstrap";

function ApplicationCard(props) {
    return (
    <Container>
        <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Link href={props.github}>Github</Card.Link>
                    <Card.Link href={props.live}>Live Application</Card.Link>
                </Card.Body>
            </Card>
        </CardGroup>
    </Container>
    )
}

export default ApplicationCard;