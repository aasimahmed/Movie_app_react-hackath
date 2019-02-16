import React from "react";
import "./Moviesquare.css";
import "../Search/Movies/Movies.css";   


const Moviesquare = ({image}) => {
    return(
        <div class="movie">
            <img src={`https://image.tmdb.org/t/p/original${image}`} alt="pic" height="100px" width="100px"/>
        </div>
    )
}

export default Moviesquare;