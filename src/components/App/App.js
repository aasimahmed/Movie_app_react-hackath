import React, { Component } from 'react';
import './App.css';
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing"
// import Search from "../Search/Search";

const MOVIE_API_KEY = "564528300769657f872709570897bb55";

class App extends Component{
    state = {
			nowplaying: []
    }

    componentDidMount(){
			fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIE_API_KEY}&language=en-US&page=1`)
			.then(nowPlayingFilms => nowPlayingFilms.json()) 
			.then(parsedNowPlayingFilms => {
				this.setState({nowplaying: parsedNowPlayingFilms.results})
			})
		}

    render(){
	
			console.log(this.state)
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
					<div className="app">
						<Nav/>
						<Landing nowPlaying={nowPlayingDetails}/>
						{/* <Search/>  */}
						}
          </div>
						)
					}
    }
}

export default App;
