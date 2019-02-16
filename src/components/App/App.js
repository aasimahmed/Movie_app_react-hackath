import React, { Component } from 'react';
import { 
	Route,
	BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing"
import Search from "../Search/Search";
import Moviemodal from "../Landing/Moviemodal/Moviemodal"
import Cinemapage from "../Cinemapage/Cinemapage";
import Homepage from '../Homepage/Homepage';

const MOVIE_API_KEY = "564528300769657f872709570897bb55";


class App extends Component{
    state = {
			nowplaying: []

    }

    componentDidMount(){
			fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIE_API_KEY}&language=en-US&page=1`) //Nowplaying fetch
			.then(nowPlayingFilms => nowPlayingFilms.json()) 
			.then(parsedNowPlayingFilms => {
				this.setState({nowplaying: parsedNowPlayingFilms.results})
			})
			fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}&language=en-US`) //Popular films fetch
			.then(data => data.json())
			.then(parsedPopularFilms => {
				this.setState({popular: parsedPopularFilms.results})
			})
			fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIE_API_KEY}&language=en-US&page=1`)
			.then(data => data.json())
			.then(parsedTopRatedFilms => {
				this.setState({toprated: parsedTopRatedFilms.results})
			})
			fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${MOVIE_API_KEY}&language=en-US&page=1`)
			.then(data => data.json())
			.then(parsedUpcomingFilms => {
				this.setState({upcoming : parsedUpcomingFilms.results})
			})
		}

    render(){
	
			console.log(this.state);
			if(this.state.nowplaying.length === 0){
				return(
					<p> loading </p>
				)
			}else{
			
			const nowPlayingDetails = this.state.nowplaying.map((val, idx) => {
				return {
				id: val.id,
				title : val.original_title,
				backdrop_path : val.backdrop_path,
				description: val.overview,
				release_date : val.release_date,
				rating: val.vote_average
				} 
			}) 
        return(



					<Router>
							<div className="app">
							<Nav/>
							{/* <Landing nowPlaying={nowPlayingDetails}/> */}

							<Route exact path="/" render={(props) => <Homepage {...props} nowPlaying={this.state.nowplaying} topRated={this.state.toprated} popular={this.state.popular} upcoming={this.state.upcoming} />} />
							<Route exact path="/cinemas" render={(props, nowPlayingDetails) => <Cinemapage {...props} nowPlaying={this.state.nowplaying}/>} />
							<Route exact path="/movie/:id" render={(props, api) => <Moviemodal {...props} api={MOVIE_API_KEY} /> } />
							<Route exact path="/search" component={Search}/>
							</div>
					</Router>
						)
					}
    }
}

export default App;
