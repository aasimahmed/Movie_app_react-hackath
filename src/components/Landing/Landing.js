import React, {Component} from "react";
import "./Landing.css";
import Mainlanding from "./Mainlanding/Mainlanding";

class Landing extends Component{
	state = {
		nowPlaying: this.props.nowPlaying,
		counter: 0,
		currentBackgroundUrl: "",
		currentMovie: 0
	}

	componentDidMount(){
		setInterval(this.setBackground, 5000)
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
				<div>
					<p>loading</p>
				</div>
			)}
			else{
		let background = this.state.currentBackgroundUrl;
		let releasedate = this.state.currentMovie.release_date.split("-").reverse().join(".");
		
		return(
				<div id="landing">
				<div> 
					Side div
				</div>
					<Mainlanding className="main_landing" title={this.state.currentMovie.title} 
										description={this.state.currentMovie.description}
										releasedate={releasedate} 
										rating ={this.state.currentMovie.rating}
										background ={background}
										/>
				<div> 
					Side div
				</div>						
				</div>
			)
		}
		}
}

export default Landing;