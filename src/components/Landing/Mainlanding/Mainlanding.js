import React from "react";
import "./Mainlanding.css";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const Mainlanding = ({title, description, rating, releasedate, background, movieClick, currentMovieId}) => {
    return(
        <Link to={`/movie/${currentMovieId}`}>
        <div className="mainlanding_card" onClick={movieClick} style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${background})`}}>
            <div>

            </div>
            <div>
              <h2 className="mainlanding_card_title">{title}</h2>
              <StarRatings
                    starRatedColor="gold"
                    rating={rating/2}
                    numberOfStars={5}
                /> 

              <p>{description.slice(0,100) + "..."}</p>
            </div>
            <div>

            </div>
        </div>
        </Link>

    )
}

export default Mainlanding;