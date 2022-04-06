import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';

const href = {
    textDecoration: 'none',
    color: 'black'
}

const CatalogItem = ({book}) => (
    <>
        <a href={`/book/${book.id}`} style={href}>
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
        </a>
    </>

)

export default CatalogItem;