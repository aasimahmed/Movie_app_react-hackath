import React from "react";
import "./Moviesquare.css";
import "../Search/Movies/Movies.css";   


const Moviesquare = ({image, id, clickedMovie, selectedFilmId, filmtitle}) => {
    
    return(
        <div className={selectedFilmId === String(id) ? "selectedmovie movie" : "movie"} >
            <p>{filmtitle}</p>
            <img id={id} onClick={clickedMovie} src={`https://image.tmdb.org/t/p/original${image}`} alt="pic" height="100px" width="100px"/>
        </div>
    )
}

export default Moviesquare;