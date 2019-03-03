import React from "react";
import "./Homepage.css"
import Landing from "../Landing/Landing.js";
import Moviesection from "../Moviesection/Moviesection";
import Search from "../Search/Search";


const Homepage = ({setArrowState, arrowState, leftSlide, loading, upcoming, toprated, popular, nowplaying, formButtonState, upcomingbutton, topratedbutton, popularbutton, nowplayingbutton}) => {
    

    return(
        <React.Fragment>
            <Landing loading={loading}nowPlaying={nowplaying}/>
            <div className="home_bottom_pane">
            <Search formButtonState={formButtonState} upcomingbutton={upcomingbutton} topratedbutton={topratedbutton} popularbutton={popularbutton} nowplayingbutton={nowplayingbutton}/>
            <Moviesection arrowState = {arrowState} setArrowState={setArrowState} leftSlide = {leftSlide} movies={nowplaying} shouldShow={nowplayingbutton} title={"Now playing"} links={true}/>
            <Moviesection arrowState = {arrowState} setArrowState={setArrowState} leftSlide = {leftSlide} movies={toprated} shouldShow={topratedbutton} title={"Top Rated"} links={true}/>
            <Moviesection arrowState = {arrowState} setArrowState={setArrowState} leftSlide = {leftSlide} movies={popular} shouldShow={popularbutton}title={"Popular"} links={true}/>
            <Moviesection arrowState = {arrowState} setArrowState= {setArrowState} leftSlide = {leftSlide} movies={upcoming} shouldShow={upcomingbutton} title={"Upcoming"} links={true}/>
            </div>
        </React.Fragment>
    )
}

export default Homepage;