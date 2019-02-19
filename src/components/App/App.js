import React, { Component } from 'react';
import { 
	Route,
	BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import Moviemodal from "../Landing/Moviemodal/Moviemodal"
import Cinemapage from "../Cinemapage/Cinemapage";
import Homepage from '../Homepage/Homepage';

const MOVIE_API_KEY = "564528300769657f872709570897bb55";


class App extends Component{
    state = {
			nowplaying: [],
			popular: [],
			toprated : [],
			upcoming: [],
    	formButtons : {
        upcomingbutton: true,
        nowplayingbutton: true,
        popularbutton : true,
        topratedbutton : true
    }

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

		formButtonState = (val) => {
			    this.setState((prevState => {
          return{
              ...prevState,
              formButtons : {...prevState.formButtons, [val] : !prevState.formButtons[val] }
              }
             }
         ))
		}
    render(){
	
			console.log(this.state);
			if(this.state.nowplaying.length === 0){
				return( //This is where the spinner would go.
					<p> loading </p>
				)
			}else{
        return(



					<Router>
							<div className="app">
							<Nav/>
							{/* <Landing nowPlaying={nowPlayingDetails}/> */}

							<Route exact path="/" render={(props) => <Homepage {...props} 
							nowplaying={this.state.nowplaying} //The movies rendered in landing page
							toprated = {this.state.toprated}
							upcoming = {this.state.upcoming}
							popular = {this.state.popular}
							nowplayingbutton={this.state.formButtons.nowplayingbutton} //all of the buttons controlled by the form - state is controlled in app, conditionally rendered in search.
							topratedbutton={this.state.formButtons.topratedbutton} 
							popularbutton={this.state.formButtons.popularbutton} 
							upcomingbutton={this.state.formButtons.upcomingbutton} 
							formButtonState={this.formButtonState}
							/>} />
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
