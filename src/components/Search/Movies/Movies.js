import React from "react";
import "./Movies.css";
import Movie from "./Movie/Movie";
import { Link } from "react-router-dom";

const Movies = ({movies}) => {
        if(movies == undefined){
            return(
                <p>Search</p>
            )
        }
        else{
        const movies_result = movies.map(val => {
           
            return (<Link to={`/movie/${val.id}`}>
            <Movie key={val.id}title={val.title} poster={`https://image.tmdb.org/t/p/original${val.poster_path}`}/>
            </Link>)
        })
        return(
            <div class="movie_container">
                <div className="slider">
                    {movies_result}
                </div>
            </div>
            )
    }
}

export default Movies;