import React from "react";
import "./Mainlanding.css";
import { Link } from "react-router-dom";

const Mainlanding = ({title, description, rating, releasedate, background, movieClick, currentMovieId}) => {
    return(
        <Link to={`/movie/${currentMovieId}`}>
        <div className="mainlanding_card" onClick={movieClick} style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${background})`}}>
            <div>

            </div>
            <div>
              <span className="mainlanding_card_title">{title}</span><span> {releasedate} </span>
              <p> {rating}/10 </p>
              <p>{description.slice(0,100) + "..."}</p>
            </div>
            <div>

            </div>
        </div>
        </Link>

    )
}

export default Mainlanding;