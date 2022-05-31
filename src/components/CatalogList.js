import React, { useState, useEffect } from 'react';
import CatalogItem from './CatalogItem';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import Pagination from './general/pagination';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

var currentBooks;
var search_enabled = false;
var book_list = [];

function CatalogList(props) {

//sorting
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(8);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    var list_size;

    //make global variable 

    useEffect(() => {
        getData();
    }, []);	

    const getData = async() => {
        const { data } = await axios.get(`${process.env.BACKEND}/api/books`);
        props.handleSettingBooks(data);
    };

    useEffect(() => {
        currentBooks = props.books;
        list_size = currentBooks.length;
    }, [props.books]);


    const [searchParam, setSearchParam] = useSearchParams();

    const searchTerm = searchParam.get('param') || '';  //set the varible name which we are looking for


    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleSearch = Event => {
        search_enabled = true;
        const param = Event.target.value; 
        //const needs to carry the same name as in .get()   /// otherwise it wont work
    
        if(param !== "") {
            setSearchParam({param});
            book_list = props.books.filter(book => book.title.toLowerCase().includes(param.toLowerCase()) || book.author.toLowerCase().includes(param.toLowerCase()));
        }
        else {
            setSearchParam({param: ''});
            book_list = props.books;
        }
    };

    function populate_books(search) {
        if(!search_enabled) {
            list_size = props.books.length;
            if(search.length >= 0) {
                currentBooks = props.books.slice(indexOfFirstBook, indexOfLastBook);
            }
        }
        else{
            list_size = book_list.length;
            currentBooks = book_list.slice(indexOfFirstBook, indexOfLastBook);
        }
    };

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