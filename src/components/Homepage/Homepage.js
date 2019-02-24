import React from "react";
import "./Homepage.css"
import Landing from "../Landing/Landing.js";
import Moviesection from "../Moviesection/Moviesection";
import Search from "../Search/Search";


const Homepage = ({loading, upcoming, toprated, popular, nowplaying, formButtonState, upcomingbutton, topratedbutton, popularbutton, nowplayingbutton}) => {
    
    return(
        <React.Fragment>
            <Landing loading={loading}nowPlaying={nowplaying}/>
            <div className="home_bottom_pane">
            <Search formButtonState={formButtonState} upcomingbutton={upcomingbutton} topratedbutton={topratedbutton} popularbutton={popularbutton} nowplayingbutton={nowplayingbutton}/>
            <Moviesection movies={nowplaying} shouldShow={nowplayingbutton} title={"Now playing"} links={true}/>
            <Moviesection movies={toprated} shouldShow={topratedbutton} title={"Top Rated"} links={true}/>
            <Moviesection movies={popular} shouldShow={popularbutton}title={"Popular"} links={true}/>
            <Moviesection movies={upcoming} shouldShow={upcomingbutton} title={"Upcoming"} links={true}/>
            </div>
        </React.Fragment>
    )
}

export default Homepage;