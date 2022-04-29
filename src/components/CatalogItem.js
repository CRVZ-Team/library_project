import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';

const href = {
    textDecoration: 'none',
    color: 'black'
}

const exp_date = {
    fontSize: '20px',
    color: '#8c8c8c'
}

const CatalogItem = ({book}) => (
    <>
        <a href={`/book/${book.id}`} style={href}>
            <Card border="dark">
                <Card.Img src={book.image_url}/>
                {book.exp_date ? <Card.Header>Valid until: {book.exp_date}</Card.Header> : null}
                <Card.Body>
                    <Card.Title><b>{book.title}</b></Card.Title>
                    <Card.Subtitle><b>{book.author},  {book.year}</b></Card.Subtitle>
                    <Card.Text >
                        {book.description.substring(0, 100)}...
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    </>

)

export default CatalogItem;