import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import pic1 from '../static/book.jpg';

const text = {
    color: '#556b2f',
    fontFamily: 'Shizuru'
}

const Home = () => (
    <div className='container text-center'>
        <img src={pic1} alt="Mrs. Who's Library" />
        <h1 style={text}>Welcome to Mrs. Who's Library's homepage</h1>
        <h2>Find your book and make your soul happy!</h2>
        <blockquote className='blockquote text-center'>
            <p><i>"A reader lives a thousands lives before he dies... The man who neverreads lives anly one."</i></p>
            <footer className='blockquote-footer'>George R.R. Martin</footer>
        </blockquote>
    </div>
);

export default Home;

