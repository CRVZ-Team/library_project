import { useState } from "react";
import CartItem from "./CartItem";
import "bootstrap/dist/css/bootstrap.css";


const boks_db = [
    {
        id: 1,
        title: "Testing title 1",
        author: "roman",
        description: "This is the testinng description for the book intended to be used for testing purposes",
        year: "2020",
        price: "23.4",
        photo: "https://cdn5.tales.dk/thumbnail/400x0/00145/82828/cover.1598524649.jpg"
    },
    {
        id: 2,
        title: "Testing title 2",
        author: "roman",
        description: "This is the testinng description for the book intended to be used for testing purposes",
        year: "2020",
        price: "23.4",
        photo: 'https://cdn6.tales.dk/00097/99927/cover.1606094417.jpg',

    },
    {
        id: 3,
        title: "Testing title 3",
        author: "roman",
        description: "This is the testinng description for the book intended to be used for testing purposes",
        year: "2020",
        price: "23.4",
        photo: "https://cdn6.tales.dk/00112/20775/cover.1568831349.jpg"
    },
    {
        id: 4,
        title: "Testing title 4",
        author: "roman",
        description: "This is the testinng description for the book intended to be used for testing purposes",
        year: "2020",
        price: "23.4",
    },
    {
        id: 5,
        title: "Testing title 5",
        author: "roman",
        description: "This is the testinng description for the book intended to be used for testing purposes",
        year: "2020",
        price: "23.4",
    },
    {
        id: 6,
        title: "Testing title 6",
        author: "roman",
        description: "This is the testinng description for the book intended to be used for testing purposes",
        year: "2020",
        price: "23.4",
    }
]


function CartList ({get_sum}) {
    const [errorMessage] = useState('');

    //set books list 
    const [books, setBooks] = useState(boks_db);

    function removeBook(id) {
        const newList = books.filter(book => book.id !== id);
        setBooks(newList);
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
        <div classNameName="container text-center">
            
            
            {errorMessage && <div classNameName="fail">{errorMessage}</div> }
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