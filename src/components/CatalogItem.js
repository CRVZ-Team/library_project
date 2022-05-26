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
            <Card border="dark" id="card" className='h-100'>
                <Card.Img src={book.image_url}/>
                {book.exp_date ? <Card.Header>Valid until: {book.exp_date}</Card.Header> : null}
                <Card.Body>
                    <Card.Title id='title'>{book.title}</Card.Title>
                    <Card.Subtitle>{book.author},  {book.year}</Card.Subtitle>
                    <Card.Text >
                        {book.description.substring(0, 100)}...
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    </>

)

export default CatalogItem;