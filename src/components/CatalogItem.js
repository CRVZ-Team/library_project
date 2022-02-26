import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';


const CatalogItem = ({book}) => (
    <Card border="dark">
        <Card.Img src={book.photo}/>
        <Card.Body>
            <Card.Title>{book.title} {book.id}</Card.Title>
            <Card.Subtitle>{book.author},  {book.year}</Card.Subtitle>
            <Card.Text>
                {book.description}
            </Card.Text>
        </Card.Body>
    </Card>
)

export default CatalogItem;