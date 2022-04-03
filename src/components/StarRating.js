import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

export const StarRating = props => {
    const [hover, setHover] = useState(0);

    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || props.rating) ? "star on" : "star off"}
              onClick={() => props.handleRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(props.rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };