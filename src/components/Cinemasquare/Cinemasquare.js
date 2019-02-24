import React from "react";
import "./Cinemasquare.css";


const Cinemasquare = ({cinema, distance, clickedCinema, id, selectedId}) => {

    return(
        
            <div onClick={clickedCinema} id={id} className={id === selectedId ? "selected movie" : "movie"} >
                {cinema} <br/>
                {distance} miles
            </div>
        
    )
}

export default Cinemasquare;