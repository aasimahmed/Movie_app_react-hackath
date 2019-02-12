import React from "react";
import "./Movie.css";

const Movie = ({title, poster}) => {

    return(
        <div className="movie">
            <h3>{title}</h3>
            <img src={poster} alt={title} width="100px"/>
        </div>
    )
}

export default Movie;