export const ReviewAndComments = props => {

    return (
        <div className="reviews">
            <h3><b>Reviews & Comments</b></h3>
            <ul>
                {props.reviews.map((review, index)  => (
                <li key={index}>
                <b className="float-l">Rating: {review.comment.rating} / 5</b>
                <br/>
                <i>"{review.comment.comment}"</i> <b className="float-r"> - {review.user} </b>
                </li>
            ))}
            </ul>
        </div>
    );

}
