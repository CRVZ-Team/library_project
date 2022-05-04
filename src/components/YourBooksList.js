import React, { useState, useEffect } from 'react';
import CatalogItem from './CatalogItem';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import Pagination from './general/pagination';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

var book_list = [];
var ls;

function YourBooksList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBookstPerPage] = useState(8);
    const [searchParam, setSearchParam] = useSearchParams();
    const [setUserId] = useState();


    const indexOfLastBook = currentPage * booksPerPage;

    const [books, setBooks] = useState([]);
    const [DefaultBookList ,setDefaultBookList] = useState([]);

    var list_size = books.length;

    const searchTerm = searchParam.get('param') || '';  //set the varible name which we are looking for
    const paginate = pageNumber => setCurrentPage(pageNumber);



    useEffect(() => {
        getData();
    }, []);	

    const getData = async() => {
        console.log("Your Books get data");
                //decode jwt
        ls = localStorage.getItem('token');
        var decoded = jwt_decode(ls);
        setUserId(decoded.id);

        const { data } = await axios.get("http://localhost:8080/api/yourbooks/" + decoded.id);
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