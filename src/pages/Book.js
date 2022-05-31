import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import './Book.css';
import { LeaveAReview } from "../components/LeaveAReview";
import { useUser } from "../auth/useUser";
import { ReviewAndComments } from "../components/ReviewAndComments";
import { useNavigate } from "react-router-dom";

export const Book = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [genres, setGenres] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [active, setActive] = useState(false);
    const user = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        getData();
        if (user != null) {
            usersBooks();
        }
    }, []);

    const handleAddToCart = (subscription) => {
        const cartBook = book;
        let cart = [];
        if (subscription === "month") {
            cartBook.subs_id = 1;
            cartBook.exp_date = 30;
            cartBook.price = subscriptions.month;
        }
        else if (subscription === "year") {
            cartBook.subs_id = 2;
            cartBook.exp_date = 365;
            cartBook.price = subscriptions.year;
        } else cartBook.subs_id = 3;

        if (localStorage.getItem("cart") != null) 
        {
            cart = JSON.parse(localStorage.getItem("cart"));
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === cartBook.id) {
                    cart.splice(i, 1);
                    break;
                }
            }
        }
        cart.push(cartBook);

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const getData = async () => {
        const { data } = await axios.get(`${process.env.BACKEND}/api/book/${id}`);
        setBook(data.book);
        setGenres(data.genres);
        setReviews(data.reviews);
        setSubscriptions(data.subscriptions);
    };

    const usersBooks = async() => {
        //itterates through list of subscribes books and changes the submit buttons
        const { data } = await axios.get(`${process.env.BACKEND}/api/yourbooks/${user.id}`);
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                setActive(true);
            }
        }
    };

    const onSubmitClicked = async () => {
        const { data } = await axios.post(`${process.env.BACKEND}/api/comment`, {
            rating,
            comment,
            book_id: book.id,
            user_id: user.id,
        });

        if (data === "success") {
            setRating(0);
            setComment("");
            alert("Comment added");
        } else {
            alert("Error");
        }
    };
    return (
        <div className="book">
            <div className="first">
            <img className="img-book" src={book.image_url} alt="Book"></img>
            <hr/>
            <div className="spec-book">
                    <h3><b>Specifications</b></h3>
                    <p>Pages: {book.pages}</p>
                    <p>Genre: <i>{genres}</i></p>
                    <p>Average rating: {book.avg_rating} / 5</p>
                    <p>Number of active subscriptions: {book.quantity}</p>
            </div>
            </div>
            <div className="second">
                <h1 className="title-book">{book.title}, {book.year}</h1>
                <div className="author-book">by {book.author}</div>
                <hr/>
                <div className="desc-book">
                    <h3><b>Description</b></h3>
                    <p>{book.description} </p>
                </div>
                <hr/>
                <div className="text-center">
                {(() => {if (active === false && user !== null) {
                    return(
                    <>
                        <button className="btn btn-outline-success" onClick={() => {handleAddToCart("month")}}>{subscriptions.month} dkk / month</button>
                        <button className="btn btn-outline-success" onClick={() => {handleAddToCart("year")}}>{subscriptions.year} dkk / year</button>
                        <button className="btn btn-outline-success"onClick={() => {handleAddToCart("")}}>{book.price} dkk / unlimited</button>
                    </>)
                } else if (active === true && user !== null) {
                    return (
                        <button className="btn btn-outline-success">You have subscribed to this book.</button>
                    )
                } else {
                    return (
                        <button className="btn btn-outline-success" onClick={() => {navigate('/login')}}>Login to subscribe</button>
                        )}
                    })
                ()}
                </div>
                <hr/>
                <ReviewAndComments reviews={reviews} />
                <hr/>
                {/* leave a comment */}
                {user != null ? <LeaveAReview rating={rating} comment={comment} handleRating={setRating} handleComment={setComment} onSubmitClicked={onSubmitClicked}/> : null }
            </div>
        </div>
        
    );
}
