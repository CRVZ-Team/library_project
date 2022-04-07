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

    const filters ={
        authors: {},
        genres: {},
        years: []
    }

    const checked_authors = [];

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

    const get_value = (e) => {

        checked_authors.push(e.target.value);
        console.log("Checked authors");
        console.log(checked_authors);

        
        //make it as  a list .. check eact time for entry 
        //for each filter option 
        //query each list 
        filters.authors['name'] = checked_authors[0];
        console.log("Dict authors");

        console.log(filters.authors);
    }
    

    return(
    <>
        <div style={side} id="frame">
            <h2>Filters</h2>
            <hr></hr>
            <ul class="nav nav-pills flex-column mb-auto"> 
                <h4>Book based</h4>
                <li class="nav-item" >
                <h5>Authors</h5>
                    <div style={scrollable}>
                        {authors.map(author => ( 
                            <div>
                                <input class="form-check-input" type="checkbox" value={author.name} onClick={get_value} id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">
                                    {author.name}
                                </label>
                            </div>
                        ))}                        
                    </div>
                    <h5>Year</h5>
                    <div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">From</span>
                            <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Till</span>
                            <input type="number"    class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                    </div>
                    <h5>Genre</h5>
                    <div style={scrollable_small}>
                        {genres.map(genre => (
                            <div>
                                <input class="form-check-input" type="checkbox" value={genre.name} id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    {genre.name}
                                </label>
                            </div>
                        ))}
                        
                    </div>
                </li>
                <br/>
                <h4>User based</h4>
                <li class="nav-item" >
                    <div style={scrollable_small}>
                        <div>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Highest rating
                            </label>
                        </div>
                        <div>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Most taken
                            </label>
                        </div>
                    </div>
                </li>
                
            </ul>
            <hr></hr>
        </div>
    </>
    )
}

export default CatalogSideBar;
