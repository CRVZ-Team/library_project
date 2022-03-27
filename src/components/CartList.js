import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from 'axios';
import CartItem from "./CartItem";
import "bootstrap/dist/css/bootstrap.css";


const boks_db = [
    {
        id: 1,
        title: "Testing title 1",
        author: "roman",
        description: "This is the testinng description for the book intended to be used for testing purposes",
        year: "2020",
    },
    {
        id: 2,
        title: "Testing title 2",
        author: "roman",
        description: "This is the testinng description for the book intended to be used for testing purposes",
        year: "2020",
    },
    {
        id: 3,
        title: "Testing title 3",
        author: "roman",
        description: "This is the testinng description for the book intended to be used for testing purposes",
        year: "2020",
    }
]


function CartList () {
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');
    const [retrieveList, setList] = useState('');
    const navigate = useNavigate();

    return (
        //Main text area
        <div className="container text-center">
            <h1>Your Cart</h1>
            <p>Review your list of desired books</p>
            {errorMessage && <div className="fail">{errorMessage}</div> }
            <ul>
                {boks_db.map(book => (
                    <CartItem book={book} />
                ))}
            </ul>
        </div>

    )
}

export default CartList;