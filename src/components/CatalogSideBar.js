import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CatalogItem from './CatalogItem';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import Pagination from './general/pagination';

function CatalogSideBar()
{
    const side = {
        width: '100%',
        paddingLeft: '5%',
    }

    const scrollable = {
        maxHeight: 'calc(100vh - 550px)',
        overflowY: 'auto'
    }

    const scrollable_small = {
        maxHeight: 'calc(100vh - 600px)',
        overflowY: 'auto',
    }
    

    return(
    <>
        <div style={side} id="frame">
            <h2>Filters</h2>
            <hr></hr>
            <ul class="nav nav-pills flex-column mb-auto"> 
                <h4>Book based</h4>
                <li class="nav-item" >
                <h5>Book attributes</h5>
                <h7>Author</h7>
                    <div style={scrollable_small}>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Jozo
                            </label>
                        </ul>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Jozo
                            </label>
                        </ul>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Jozo
                            </label>
                        </ul>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Jozo
                            </label>
                        </ul>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Jozo
                            </label>
                        </ul>
                    </div>
                    <h7>Year</h7>
                    <div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">From</span>
                            <input type="number"  max="2022" min="0" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Till</span>
                            <input type="number"  max="2022" min="0" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                    </div>
                    <h7>Genre</h7>
                    <div style={scrollable_small}>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Drama
                            </label>
                        </ul>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Horror
                            </label>
                        </ul>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Sci-fi
                            </label>
                        </ul>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Romance
                            </label>
                        </ul>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Thriller
                            </label>
                        </ul>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Detective
                            </label>
                        </ul>
                    </div>
                </li>
                <br/>
                <h4>User based</h4>
                <li class="nav-item" >
                    <div style={scrollable_small}>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Highest rating
                            </label>
                        </ul>
                        <ul>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Most taken
                            </label>
                        </ul>
                    </div>
                </li>
                
            </ul>
            <hr></hr>
        </div>
    </>
    )
}

export default CatalogSideBar;
