import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CartList from './CartList';

function MouseOver(event) {
    event.target.style.background = '#dc3545';
}

function MouseOut(event){
    event.target.style.background = '#ffffff';
}

const CartItem = ({book, removeBook}) => (
    <div className="container" style={card}>
        <div className="row">
            <div className="col-sm-3 d-flex justify-content-center text-center" >
                <img src={book.image_url} style={photo}/>
            </div>
            <div className="col-sm-9" style={text}>
                <div className="row">
                    <div className="col-sm-9 text-start">
                        <h5><b>Title: {book.title}</b></h5>
                        <h6>Author: {book.author} | Year: {book.year}</h6>
                        <h5><b>Price:</b> {book.price} dkk</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-9 text-start">
                        <h6>Description: {book.description}</h6>
                    </div>
                    <div className="col-sm-3">
                        <button onClick={() => removeBook(book.id)} onMouseOver={MouseOver} onMouseOut={MouseOut} type="button" className="btn btn-light"  style={remove_button}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
    </div>
)

const photo ={
    marginTop: '10%',
    width: '80%',
    display: 'block',
    height: '80%',
    backgroundImage: 'linear-gradient(to right, #ffffff, #556b2f)',
}

const text = {
    //border: '1px solid #000000',
    borderLeft: '1px solid #000000',
}

const card = {
    marginBottom: '5px',
    marginTop: '5px',
}

const remove_button = {
    border: '1px solid #dc3545',
}

export default CartItem;