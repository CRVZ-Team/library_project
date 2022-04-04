import React, { useState, useEffect } from 'react';
import axios from "axios";
import ReactPaginate from 'react-paginate';
import CatalogItem from './CatalogItem';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import Pagination from './general/pagination';

function CatalogSideBar()
{

    const[authors, setAuthors] = useState([]);
    const[genres, setGenres] = useState([]);
    const[years, setYears] = useState([]);

    useEffect(() => {
        getAuthors();
    }, []);


    const getAuthors = async() => {
        const res = await axios.get("http://localhost:8080/api/filters/authors");
        setAuthors(res.data[0].authors);
        setYears(res.data[1].year_span);
        setGenres(res.data[2].genres);
        console.log("years");
        console.log(res.data[1].year_span[0].max);
        console.log(res.data[2]);

        console.log(years[0].max);
    };
    
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
                <h7>Authors</h7>
                    <div style={scrollable_small}>
                        {authors.map(author => (
                            <ul>
                                <input class="form-check-input" type="checkbox" value={author.name} id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    {author.name}
                                </label>
                            </ul>
                        ))}                        
                    </div>
                    <h7>Year</h7>
                    <div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">From</span>
                            <input type="number" max={years[0].max} min={years[0].min} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Till</span>
                            <input type="number"   max={years[0].max} min={years[0].min} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                    </div>
                    <h7>Genre</h7>
                    <div style={scrollable_small}>
                        {genres.map(genre => (
                            <ul>
                                <input class="form-check-input" type="checkbox" value={genre.name} id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    {genre.name}
                                </label>
                            </ul>
                        ))}
                        
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
