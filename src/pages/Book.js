import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import './Book.css';
import { LeaveAReview } from "../components/LeaveAReview";
import { useUser } from "../auth/useUser";
import { ReviewAndComments } from "../components/ReviewAndComments";
import { usersBooks } from "../pages/usersBooks";

export const Book = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [book, setBook] = useState({});
    const [genres, setGenres] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [activeIds, setActiveIds] = useState([]);
    const user = useUser();
    const [active] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const { data } = await axios.get(`http://localhost:8080/api/book/${id}`);
        setData(data);
        setBook(data.book);
        setGenres(data.genres);
        setReviews(data.reviews);
        setSubscriptions(data.subscriptions);
        verify_activness();
    };

    const verify_activness = async() => {
        setActiveIds(usersBooks());
        console.log("Active IDS");
        promise  = Promise.resolve(activeIds);
        promise.then(function(value) {
            console.log(value);
            for(var i = 0; i < value.length; i++) {
                if(value[i] == book.id) {
                    active = true;
                }
            }
        }),
        console.log(activeIds);
        // for (var i = 0; i < activeIds.length; i++) {
        //     if (activeIds[i] === book.id) {
        //         active = true;
        //         console.log("active");
        //     }
        //     else {
        //         active = false;
        //         console.log("not active");
        //     }
        // }
    };


    const onSubmitClicked = async () => {
        console.log(user.id);
        const { data } = await axios.post("http://localhost:8080/api/comment", {
            rating,
            comment,
            book_id: book.id,
            user_id: user.id,
        });

        if (data == "success") {
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
            <img className="img-book" src={book.image_url}></img>
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
                    {active == false ?
                        <>
                        <button className="btn btn-outline-success">{subscriptions.month} dkk / month</button>
                        <button className="btn btn-outline-success">{subscriptions.year} dkk / month</button>
                        <button className="btn btn-outline-success">{book.price} dkk / month</button>
                        </>
                        :
                        <button className="btn btn-outline-success">You have subscribed to this book.</button>
                    }
                </div>
                <hr/>
                <ReviewAndComments reviews={reviews} />
                <hr/>
                {/* leave a comment */}
                <LeaveAReview rating={rating} comment={comment} handleRating={setRating} handleComment={setComment} onSubmitClicked={onSubmitClicked}/>
            </div>
        </div>
        
    );
}
