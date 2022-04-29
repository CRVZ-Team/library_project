import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CatalogItem from './CatalogItem';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import Pagination from './general/pagination';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';


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

var currentBooks;
var reload_counter = 0;
var search_enabled = false;
var book_list = [];

function CatalogList(props) {
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
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBookstPerPage] = useState(8);

    const [sortType, setSortType] = useState('book_id');
    const [searchType, setSearchType] = useState();


    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    var list_size;

    //make global variable 

    useEffect(() => {
        getData();
    }, []);	

    const getData = async() => {
        console.log("normal word");
        const { data } = await axios.get('http://localhost:8080/api/books');
        props.handleSettingBooks(data);
        console.log(data);
    };


    const [searchParam, setSearchParam] = useSearchParams();

    const searchTerm = searchParam.get('param') || '';  //set the varible name which we are looking for


    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleSearch = Event => {
        search_enabled = true;
        const param = Event.target.value; 
        //const needs to carry the same name as in .get()   /// otherwise it wont work
    
        if(param != "") {
            setSearchParam({param});
            book_list = props.books.filter(book => book.title.toLowerCase().includes(param.toLowerCase()) || book.author.toLowerCase().includes(param.toLowerCase()));
        }
        else {
            setSearchParam({param: ''});
            console.log("Empty search")
            book_list = props.books;
        }
        console.log("Current book END OF SEARCH")
        console.log(book_list)
        console.log(list_size)
    };

    function populate_books(search) {
        if(!search_enabled) {
            list_size = props.books.length;
            if(search.length >= 0) {
                console.log("current books in POPULATE")
                currentBooks = props.books.slice(indexOfFirstBook, indexOfLastBook);
            }
        }
        else{
            list_size = book_list.length;
            console.log("Populate in else")
            currentBooks = book_list.slice(indexOfFirstBook, indexOfLastBook);
            console.log(currentBooks)
        }
    };


  /*  useEffect(() => {
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
    */

    const form = {
        border: 'none',
        borderBottom: '1px solid #556b2f',
        
    }

    return (
        <>
            {populate_books(searchTerm)}
            <div className="container align-items-center">
                <div className='w-25 p-3 container'>
                    <input type="text" placeholder="Search for Book/Author" onChange={handleSearch}  value={searchTerm} style={form}/>
                </div>
            
                <Row xs={4} md={8} className="g-4">
                    {currentBooks.map(bk => 
                    <Col key={bk.id}>
                        <CatalogItem book={bk} />
                    </Col>)}
                </Row>
                <div className='w-25 p-3 container'>
                    <Pagination booksPerPage={booksPerPage} totalBooks={list_size} paginate={paginate} />
                </div>
            </div>
        </>
    )
}



export default CatalogList;