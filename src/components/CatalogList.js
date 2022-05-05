import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CatalogItem from './CatalogItem';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import Pagination from './general/pagination';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';


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

    useEffect(() => {
        currentBooks = props.books;
        list_size = currentBooks.length;
        console.log("useEffect")
    }, [props.books]);


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
                    <input id='search_book' type="text" placeholder="Search for Book/Author" onChange={handleSearch}  value={searchTerm} style={form}/>
                </div>
            
                <Row s={2} md={4} className="g-2">
                    {currentBooks.map(bk => 
                    <Col key={bk.id} id={bk.id}>
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