import React from "react";
import "./Moviesection.css"
import "../Search/Movies/Movies.css"
import Moviesquare from "../Moviesquare/Moviesquare";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";


const Moviesection = ({setArrowState, arrowState, leftSlide, movies, title, shouldShow, links, selectedFilmId, clickedMovie}) => {
    if(movies === undefined){ //If no movies return loading
        return(
            <h2>loading</h2>
        )
    }
    else if(!shouldShow){ // if the prop shouldShow is true, then we render 
        return null;
    }
    else {
        
        const titleFix = title.toLowerCase().split(" ").join("");
        const arrowStyle = arrowState[titleFix] ? "arrowAnimated" : "arrowUnanimated";

       

        //We need something which sets state of IsArrowHovered, 
        //We need to add a class to the arrow which pulses it when hovered.
        //OnMouseEnter={ArrowHovered}
        const listOfMovies = movies.map((val) => {
            
            return (links) ?
             (
            <Link key ={val.id} to={`movie/${val.id}`}>
                
                <Moviesquare key={val.id}image={val.poster_path} selectedFilmId={selectedFilmId}/>
                <StarRatings 
                    rating={val.vote_average/2}
                    numberOfStars={5}
                    starRatedColor="red"
                    starDimension="20px"
                
                />
            </Link>
            )
            :
            <Moviesquare selectedFilmId={selectedFilmId} filmtitle={val.original_title} key={val.id} id={val.id} image={val.poster_path} clickedMovie={clickedMovie} rating={val.vote_average}/>
    })
    return(

        <section>
            <h2>{title}</h2>
            
                <div className="movie_container">
                        <div className="slider">
                        <i 
                        onMouseOver={leftSlide}
                        onMouseLeave={setArrowState}
                        onClick={leftSlide} id={titleFix} className={`fas fa-arrow-left fa-7x ${arrowStyle}`}></i>
                            {listOfMovies}
                        </div>
                </div>
                
        </section>
        )
    }
}

export default Moviesection;
