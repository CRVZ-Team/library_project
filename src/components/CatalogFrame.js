import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CatalogItem from './CatalogItem';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import Pagination from './general/pagination';
import CatalogSideBar from './CatalogSideBar';
import CatalogList from './CatalogList';


function CatalogFrame() {

    const [books, setBooks] = useState([]);

    const side = {
        width: '25%',
    }

    const body = {
    }

    /*
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={side}>
            <CatalogSideBar/>
        </div>
    */

    return(
    <div className='container'>
        <div class="row" style={body}>
            <div class="col-sm-2" >
                <CatalogSideBar handleSettingBooks={setBooks}/>
            </div>
            <div class="col-sm-10" >
                <CatalogList books={books} handleSettingBooks={setBooks}/>
            </div>
        </div>
    </div>
    )
}

export default CatalogFrame;