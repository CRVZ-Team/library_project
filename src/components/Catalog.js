import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CatalogItem from './CatalogItem';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';


function Catalog() {
    const db_books = [
    {
        id: 1,
        photo: 'https://cdn6.tales.dk/00112/20775/cover.1568831349.jpg',
        title: 'Emma',
        author: 'Jane Austen',
        year: '1816',
        description: 'Jane Austen`s Emma is her masterpiece, mixing the sparkle of her early books with a deep sensibility.'
    },
    {
        id: 2,
        photo: 'https://cdn5.tales.dk/thumbnail/400x0/00145/82828/cover.1598524649.jpg',
        title: 'Jane Eyre',
        author: 'Charlotte Bronte',
        year: '1847',
        description: 'Charlotte Brontë`s erotic, gothic masterpiece became the sensation of Victorian England. Its great breakthrough was its intimate dialogue with the reader.'
    },
    {
        id:3, 
        photo: 'https://cdn6.tales.dk/00097/99927/cover.1606094417.jpg',
        title: 'David Coperfield',
        author: 'Charles Dickens',
        year: '1850',
        description: 'David Copperfield marked the point at which Dickens became the great entertainer and also laid the foundations for his later, darker masterpieces.'
    },
    {
        id:4,
        photo: 'https://cdn6.tales.dk/00027/83965/cover.1561329959.jpg',
        title: 'Little Women',
        author: 'Louisa May Alcott',
        year: '1868',
        description: 'Louisa May Alcott`s highly original tale aimed at a young female market has iconic status in America and never been out of print.'
    },
    {
        id: 5,
        photo: 'https://cdn6.tales.dk/00112/20775/cover.1568831349.jpg',
        title: 'Emma',
        author: 'Jane Austen',
        year: '1816',
        description: 'Jane Austen`s Emma is her masterpiece, mixing the sparkle of her early books with a deep sensibility.'
    },
    {
        id: 6,
        photo: 'https://cdn5.tales.dk/thumbnail/400x0/00145/82828/cover.1598524649.jpg',
        title: 'Jane Eyre',
        author: 'Charlotte Bronte',
        year: '1847',
        description: 'Charlotte Brontë`s erotic, gothic masterpiece became the sensation of Victorian England. Its great breakthrough was its intimate dialogue with the reader.'
    },
    {
        id:7, 
        photo: 'https://cdn6.tales.dk/00097/99927/cover.1606094417.jpg',
        title: 'David Coperfield',
        author: 'Charles Dickens',
        year: '1850',
        description: 'David Copperfield marked the point at which Dickens became the great entertainer and also laid the foundations for his later, darker masterpieces.'
    },
    {
        id:8,
        photo: 'https://cdn6.tales.dk/00027/83965/cover.1561329959.jpg',
        title: 'Little Women',
        author: 'Louisa May Alcott',
        year: '1868',
        description: 'Louisa May Alcott`s highly original tale aimed at a young female market has iconic status in America and never been out of print.'
    },
    {
        id: 9,
        photo: 'https://cdn6.tales.dk/00112/20775/cover.1568831349.jpg',
        title: 'Emma',
        author: 'Jane Austen',
        year: '1816',
        description: 'Jane Austen`s Emma is her masterpiece, mixing the sparkle of her early books with a deep sensibility.'
    },
    {
        id: 10,
        photo: 'https://cdn5.tales.dk/thumbnail/400x0/00145/82828/cover.1598524649.jpg',
        title: 'Jane Eyre',
        author: 'Charlotte Bronte',
        year: '1847',
        description: 'Charlotte Brontë`s erotic, gothic masterpiece became the sensation of Victorian England. Its great breakthrough was its intimate dialogue with the reader.'
    },
    {
        id: 11, 
        photo: 'https://cdn6.tales.dk/00097/99927/cover.1606094417.jpg',
        title: 'David Coperfield',
        author: 'Charles Dickens',
        year: '1850',
        description: 'David Copperfield marked the point at which Dickens became the great entertainer and also laid the foundations for his later, darker masterpieces.'
    },
    {
        id: 12,
        photo: 'https://cdn6.tales.dk/00027/83965/cover.1561329959.jpg',
        title: 'Little Women',
        author: 'Louisa May Alcott',
        year: '1868',
        description: 'Louisa May Alcott`s highly original tale aimed at a young female market has iconic status in America and never been out of print.'
    }
]; 

    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(4);
    const [pageCount, setPageCount] = useState(0);


    const getData = () => {
        const slice = db_books.slice(offset, offset + perPage);
        const postData = slice.map(pd => 
        <Col key={pd.id}>
            <CatalogItem book={pd} />
        </Col>);
        setData(postData);
        setPageCount(Math.ceil(db_books.length / perPage));
    };

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1);
    };

    useEffect(() => {
        getData();
    }, [offset]);


    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {data}
            </Row>
            <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"} />
        </>
    )
}


export default Catalog;