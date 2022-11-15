import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import YourBooksList from './YourBooksList';


function YourBooksFrame() {
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