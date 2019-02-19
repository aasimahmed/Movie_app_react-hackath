import React, {Component} from "react";
import "./Landing.css";
import Mainlanding from "./Mainlanding/Mainlanding";
import Loading from "../Loading/Loading";

class Landing extends Component{
	state = {
		nowPlaying: this.props.nowPlaying,
		counter: 0, //checks we havent reached end of our nowPlaying list.
		currentBackgroundUrl: "", //The current url that is on the background
		currentMovie: 0 //The current movie we are on in the background.
	}

	componentDidMount(){
		setInterval(this.setBackground, 5000)
	}

	componentWillUnmount(){
		clearInterval(this.setBackground);
	}

	setBackground = () => {
		// this should return a background url which is 
		const copyState = {...this.state}
		const pickedBackground = copyState.nowPlaying[copyState.counter].backdrop_path;
		const pickedMovie = copyState.nowPlaying[copyState.counter];
		const url = `https://image.tmdb.org/t/p/original${pickedBackground}`;
		copyState.counter === 19 ? copyState.counter = 0 : copyState.counter++
	
			this.setState({
			...copyState,
			counter: copyState.counter,
			currentBackgroundUrl: url,
			currentMovie: pickedMovie
		})
	}

		
	render(){


		if(this.state.currentMovie === 0){
			return(
				<Loading image={"https://cdn-images-1.medium.com/max/1600/0*3IFEy-hfoIpgFjBl.gif"} />
			)}
			else{
		let background = this.state.currentBackgroundUrl;
		let releasedate = this.state.currentMovie.release_date.split("-").reverse().join(".");
		
		return(
				<div id="landing">

					<Mainlanding className="main_landing" title={this.state.currentMovie.title} 
										description={this.state.currentMovie.overview}
										releasedate={releasedate} 
										rating ={this.state.currentMovie.vote_average}
										background ={background}
										currentMovieId={this.state.currentMovie.id}
										movieClick={this.clickMovie}
										/>
			
				</div>
			)
		}
		}
}

export default Landing;