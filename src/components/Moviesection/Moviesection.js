import React from "react";
import "./Moviesection.css"
import "../Search/Movies/Movies.css"
import Moviesquare from "../Moviesquare/Moviesquare";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings";


const Moviesection = ({movies, title, shouldShow, leftSlide, links, selectedFilmId, clickedMovie}) => {
    if(movies === undefined){ //If no movies return loading
        return(
            <h2>loading</h2>
        )
    }
    else if(!shouldShow){ // if the prop shouldShow is true, then we render 
        return null;
    }
    else {
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
                    <span onClick={leftSlide}>X</span>
                        <div className="slider">
                            {listOfMovies}
                        </div>
                    <span>X</span>
                </div>
        </section>
        )
    }
}

export default Moviesection;
