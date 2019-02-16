import React from "react";
import "./Movies.css";
import Movie from "./Movie/Movie";

const Movies = ({movies}) => {
    
        if({movies}.movies.length === 0){
            return(
                <div>
                <p>nothign</p>
                </div>
            )
        }
        else{
        const movies_result = {movies}.movies.map(val => {
           
            return <Movie key={val.id}title={val.title} poster={`https://image.tmdb.org/t/p/original${val.poster_path}`}/>
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