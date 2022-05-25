import React, { useState, useEffect } from 'react';
import CatalogItem from './CatalogItem';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import Pagination from './general/pagination';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../auth/useUser';

var book_list = [];
var ls;

function YourBooksList() {
    const [setCurrentPage] = useState(1);
    const [booksPerPage] = useState(8);
    const [searchParam, setSearchParam] = useSearchParams();
    const user = useUser();



    const [books, setBooks] = useState([]);
    const [DefaultBookList ,setDefaultBookList] = useState([]);

    var list_size = books.length;

    const searchTerm = searchParam.get('param') || '';  //set the varible name which we are looking for
    const paginate = pageNumber => setCurrentPage(pageNumber);



    useEffect(() => {
        getData();
    });	

    const getData = async() => {
        console.log("Your Books get data");
        const { data } = await axios.get("http://localhost:8080/api/yourbooks/" + user.id);
        //setting books list which is used for sorting
        setBooks(data);

        //set default list which to use as default when no search param is provided
        setDefaultBookList(data);
    };

    const handleSearch = Event => {
        const param = Event.target.value; 
        //const needs to carry the same name as in .get()   /// otherwise it wont work
        
        if(param !== "") {
            setSearchParam({param});
            console.log("Searching for: " + param);
            //book_list = props.books.filter(book => book.title.toLowerCase().includes(param.toLowerCase()) || book.author.toLowerCase().includes(param.toLowerCase()));
            book_list = books.filter(book => book.title.toLowerCase().includes(param.toLowerCase()) || book.author.toLowerCase().includes(param.toLowerCase()));
        }
        else {
            setSearchParam({param: ''});
            console.log("Empty search")
            book_list = DefaultBookList;
        }

        setBooks(book_list);
        console.log("Current book END OF SEARCH")
    };

    const form = {
        border: 'none',
        borderBottom: '1px solid #556b2f',
    }

    return (
        <>
            <div className="container align-items-center">
                <div className='w-25 p-3 container'>
                    <input type="text" placeholder="Search for Book/Author" onChange={handleSearch}  value={searchTerm} style={form}/>
                </div>
                <Row xs={4} md={8} className="g-4">
                    {books.map(bk => 
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



export default YourBooksList;