import React, { useState, useEffect } from 'react';
import axios from "axios";
import ReactPaginate from 'react-paginate';
import CatalogItem from './CatalogItem';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import Pagination from './general/pagination';
import { propTypes } from 'react-bootstrap/esm/Image';

let updated_authors = [];
let updated_genres = [];
let updated_years = [];

function CatalogSideBar(props)
{

    const[authors, setAuthors] = useState([]);
    const[genres, setGenres] = useState([]);
    const[years, setYears] = useState([]);

    const[filter_authors, setFilterAuthors] = useState([]);
    const[filter_genres, setFilterGenres] = useState([]);
    const[filter_years, setFilterYears] = useState([]);

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



    const get_value = async(e) => {

        if (e.target.id == "author") {
            if (e.target.checked) {
                setFilterAuthors([...filter_authors, e.target.value]);
                updated_authors = [...filter_authors, e.target.value];
            } else {
                updated_authors = filter_authors.filter(item => item !== e.target.value);
                setFilterAuthors(filter_authors.filter(item => item !== e.target.value));
            }
        }
        if (e.target.id == "genre") {
            if (e.target.checked) {
                setFilterGenres([...filter_genres, e.target.value]);
                updated_genres = [...filter_genres, e.target.value];
            } else {
                setFilterGenres(filter_genres.filter(item => item !== e.target.value));
                updated_genres = filter_genres.filter(item => item !== e.target.value);
            }
        }

        if (e.target.id == "year") {
            if (e.target.checked) {
                setFilterYears([...filter_years, e.target.value]);
                updated_years = [...filter_years, e.target.value];
            } else {
                setFilterYears(filter_years.filter(item => item !== e.target.value));
                updated_years = filter_years.filter(item => item !== e.target.value);
            }
        }

        const { data } = await axios.post("http://localhost:8080/api/filter/books", {
            authors: updated_authors,
            genres: updated_genres,
            years: updated_years
        });

        props.handleSettingBooks(data);


        // checked_authors.push(e.target.value);
        // console.log("Checked authors");
        // console.log(checked_authors);

        
        // //make it as  a list .. check eact time for entry 
        // //for each filter option 
        // //query each list 
        // filters.authors['name'] = checked_authors[0];
        // console.log("Dict authors");

        // console.log(filters.authors);
    }
    

    return(
    <>
        <div style={side} id="frame">
            <h2>Filters</h2>
            <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto"> 
                <h4>Book based</h4>
                <li className="nav-item" >
                <h5>Book attributes</h5>
                <h6>Authors</h6>
                    <div style={scrollable_small}>
                        {authors.map((author, id) => (
                            <div>
                                <input key={id} className="form-check-input"  type="checkbox" value={author.name} onChange={get_value} id="author"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {author.name}
                                </label>
                            </div>
                        ))}                        
                    </div>
                    <h5>Year</h5>
                        <div style={scrollable}>
                            {years.map((year, id) => (
                                <div>
                                    <input key={id} className="form-check-input" type="checkbox" value={year} onChange={get_value} id="year" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {year}
                                    </label>
                                </div>
                            ))}
                        </div>
                    <h5>Genre</h5>
                    <div style={scrollable_small}>
                        {genres.map((genre, id) => (
                            <div>
                                <input key={id} className="form-check-input" type="checkbox" value={genre.name} onChange={get_value} id="genre"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {genre.name}
                                </label>
                            </div>
                        ))}
                        
                    </div>
                </li>
                <br/>
                <h4>User based</h4>
                <li className="nav-item" >
                    <div style={scrollable_small}>
                        <div>
                            <input className="form-check-input" type="checkbox" value="" id="rating"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Highest rating
                            </label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox" value="" id="most_taken"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
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
