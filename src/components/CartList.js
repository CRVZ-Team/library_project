import { useState } from "react";
import { useToken } from "../auth/useToken";
import CartItem from "./CartItem";
import "bootstrap/dist/css/bootstrap.css";

function CartList ({get_sum, books, setBooks}) {
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');
    const [retrieveList, setList] = useState('');

    function removeBook(id) {
        const newList = books.filter(book => book.id !== id);
        setBooks(newList);
        localStorage.setItem('cart', JSON.stringify(newList));
        calculate_sum(newList);
    }

    function calculate_sum(books) {
        var sum = 0;
        books.forEach(book => {
            sum = sum + parseFloat(book.price);
        });
        get_sum(sum.toFixed(2));
    }

    return (
        //Main text area
        <div className="container text-center">           
            {errorMessage && <div className="fail">{errorMessage}</div> }
            {books.length <= 0 ? 
                <>
                    <h1>Your cart is empty</h1>
                    <hr></hr>
                    <h4>Insert books into your cart.</h4>
                    <a href="/catalog">
                        <button className="btn btn-success" >Look for books</button>
                    </a>
                    
                </>
            :
                <>
                <h1>Your Cart</h1>
                <p>Review your list of desired books</p>
                    <ul>
                        {books.map(book => (
                            calculate_sum(books),
                            <CartItem book={book} removeBook={removeBook} />
                        ))}
                    </ul>
                </>
            }
            
        </div>

    )
}

export default CartList;