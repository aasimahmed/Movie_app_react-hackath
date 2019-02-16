import React from "react";
import "./Homepage.css"
import Landing from "../Landing/Landing.js";
import Moviesection from "../Moviesection/Moviesection";
import Search from "../Search/Search";


const Homepage = ({upcoming, topRated, popular, nowPlaying}) => {
    console.log(upcoming, topRated, popular, nowPlaying)
    return(
        <React.Fragment>
            <Landing nowPlaying={nowPlaying}/>
            <Search/>
            <Moviesection movies={nowPlaying} title={"Now playing"}/>
            <Moviesection movies={topRated} title={"Top Rated"}/>
            <Moviesection movies={popular} title={"Popular"}/>
            <Moviesection movies={upcoming} title={"Upcoming"}/>
        </React.Fragment>
    )
}

export default Homepage;