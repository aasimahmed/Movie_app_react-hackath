import React from "react";
import "./Homepage.css"
import Landing from "../Landing/Landing.js";
import Moviesection from "../Moviesection/Moviesection";
import Search from "../Search/Search";


const Homepage = ({loading, upcoming, toprated, popular, nowplaying, formButtonState, upcomingbutton, topratedbutton, popularbutton, nowplayingbutton}) => {
    
    return(
        <React.Fragment>
            <Landing loading={loading}nowPlaying={nowplaying}/>
            <Search formButtonState={formButtonState} upcomingbutton={upcomingbutton} topratedbutton={topratedbutton} popularbutton={popularbutton} nowplayingbutton={nowplayingbutton}/>
            <Moviesection movies={nowplaying} shouldShow={nowplayingbutton} title={"Now playing"}/>
            <Moviesection movies={toprated} shouldShow={topratedbutton} title={"Top Rated"}/>
            <Moviesection movies={popular} shouldShow={popularbutton}title={"Popular"}/>
            <Moviesection movies={upcoming} shouldShow={upcomingbutton} title={"Upcoming"}/>
        </React.Fragment>
    )
}

export default Homepage;