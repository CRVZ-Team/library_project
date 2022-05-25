import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import CatalogSideBar from './CatalogSideBar';
import CatalogList from './CatalogList';


function CatalogFrame() {

    const [books, setBooks] = useState([]);

    const body = {
    }

    return(
    <div className='container'>
        <div className="row" style={body}>
            <div className="col-sm-2" >
                <CatalogSideBar handleSettingBooks={setBooks}/>
            </div>
            <div className="col-sm-10" >
                <CatalogList books={books} handleSettingBooks={setBooks}/>
            </div>
        </div>
    </div>
    )
}

export default CatalogFrame;