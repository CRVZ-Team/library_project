import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CartList from './CartList';

function MouseOver(event) {
    event.target.style.background = '#dc3545';
}

function MouseOut(event){
    event.target.style.background = '#ffffff';
}

function handleRemove(id) {

}


const CartItem = ({book}) => (
    <div class="container" style={card}>
        <div class="row">
            <div class="col-sm-3" style={photo}>
                <p>Photo</p>
            </div>
            <div class="col-sm-9" style={text}>
                <div class="row">
                    <div class="col-sm-9 text-start" style={text}>
                        <h5>Title: {book.title}</h5>
                        <h6>Author: {book.author} | Year: {book.year}</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-9 text-start" style={text}>
                        <h6>Description: {book.description}</h6>
                    </div>
                    <div class="col-sm-3">
                        <button onClick={handleRemove(book.id)} onMouseOver={MouseOver} onMouseOut={MouseOut} type="button" class="btn btn-light"  style={remove_button}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const photo ={
    background: '#556b2f',
    opacity: '0.65',
}

const text = {
    //border: '1px solid #000000',
    borderLeft: '1px solid #000000',
}

const card = {
    marginBottom: '5px',
    marginTop: '5px',
    border: '1px solid #bdbebf',
}

const remove_button = {
    border: '1px solid #dc3545',
}

export default CartItem;