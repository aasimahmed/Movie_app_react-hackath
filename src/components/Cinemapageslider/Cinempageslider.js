import React from "react";
import "../Moviesection/Moviesection.css";
import Cinemasquare from "../Cinemasquare/Cinemasquare";

const Cinempageslider = ({leftSlide, cinemas, clickedCinema, selectedId}) => {

    

    const cinemalist = cinemas.map(val => {
        return <Cinemasquare selectedId={selectedId}key={val.id} id={val.id} cinema={val.name} distance={val.distance} clickedCinema={clickedCinema}/>
    })

    return(
        <section>
            <h2> Pick a cinema</h2>
            <span id="film"onClick={leftSlide}>X</span>
            <div className="movie_container">
                <div className="slider">
                    {cinemalist}
                </div>
            </div>
        </section>
    )

}

export default Cinempageslider;
