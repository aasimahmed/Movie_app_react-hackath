import React from "react";
import "./Moviesection.css"
import Moviesquare from "../Moviesquare/Moviesquare";


const Moviesection = ({movies, title}) => {
    if(!movies){
        return(
            <h2>loading</h2>
        )
    }else{
    const listOfMovies = movies.map((val, idx) => {
        return <Moviesquare image={val.poster_path} rating={val.vote_average}/>
    })
    return(

        <section className="moviePane">
                <h2>{title}</h2>
                <div className="movieSlider">
                    {listOfMovies}
                </div>
                
        </section>
        )
    }
}

export default Moviesection;
