import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CatalogItem from './CatalogItem';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import Pagination from './general/pagination';


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


function Catalog() {
//pagination 
/*
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBookstPerPage] = useState(4);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = db_books.slice(indexOfFirstBook, indexOfLastBook);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {   
        setBooks(currentBooks);
    }, [currentBooks]);
    */


//sorting
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBookstPerPage] = useState(4);

    const [sortType, setSortType] = useState('book_id');


    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);


    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        const sortArray = type => {
        const types = {
        book_id: 'book_id',
        year: 'year',
        author: 'author',
        title: 'title',
        };
        const sortProperty = types[type];
        if (sortProperty === 'author') {
            const sorted = [...db_books].sort((a, b) => a.author.localeCompare(b.author));
            console.log(" Sorted: By author");
            setBooks(sorted);
        }
        else if (sortProperty === 'title') {
        
            const sorted = [...db_books].sort((a, b) => a.title.localeCompare(b.title));
            console.log(" Sorted: By title");
            setBooks(sorted);
        }
        else
        {
            const sorted = [...db_books].sort((a, b) => b[sortProperty] - a[sortProperty]);
            console.log(" Sorted: By number");
            setBooks(sorted);
        }
        
        };
        sortArray(sortType);
    }, [sortType]); 
            

    return (
        <>
            <div className="container align-items-center">
                <div className='w-25 p-3 container'>
                    <select className='form-select' onChange={(e) => setSortType(e.target.value)} >
                        <option value="book_id">Book ID</option>
                        <option value="year">Year</option>
                        <option value="author">Author</option>
                        <option value="title">Title</option>


                    </select>   
                </div>
            
                <Row xs={1} md={4} className="g-4">
                    {currentBooks.map(bk => 
                    <Col key={bk.id}>
                        <CatalogItem book={bk} />
                    </Col>)}
                </Row>
                <div className='w-25 p-3 container'>
                    <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate} />
                </div>
            </div>
        </>
    )
}



export default Catalog;