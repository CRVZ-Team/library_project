import { StarRating } from "./StarRating";

export const LeaveAReview = props => {
    return (
        <div>
            <h3><b>Leave a comment</b></h3>

                <div className="form-group">
                    <label>Rating:</label>
                        <StarRating rating={props.rating} handleRating={props.handleRating}/>
                    <label>Comment</label>
                    <textarea className="form-control" rows="3" onChange={e => props.handleComment(e.target.value)} value={props.comment}></textarea>
                    <button className="btn btn-outline-success float-r" onClick={props.onSubmitClicked}>Submit</button>
                </div>
        </div>
    );
};
