import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CatalogItem from './CatalogItem';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import Pagination from './general/pagination';
import YourBooksList from './YourBooksList';


function YourBooksFrame() {

    const [books, setBooks] = useState([]);

    /*
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={side}>
            <CatalogSideBar/>
        </div>
    */

    return(
    <div className='container'>
        <div className="row">
            <div className="col-sm" >
                <YourBooksList />
            </div>
        </div>
    </div>
    )
}

export default YourBooksFrame;