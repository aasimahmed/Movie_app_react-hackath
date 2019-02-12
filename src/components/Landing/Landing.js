import React, {Component} from "react";
import "./Landing.css";
import Leftlanding from "./Leftlanding/Leftlanding";
import Mainlanding from "./Mainlanding/Mainlanding";
import Rightlanding from "./Rightlanding/Rightlanding";

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
		// this should return a background url
		const copyState = {...this.state}
		const pickedBackground = copyState.nowPlaying[copyState.counter].backdrop_path;
		const pickedMovie = copyState.nowPlaying[copyState.counter];
		const url = `https://image.tmdb.org/t/p/original${pickedBackground}`;
		copyState.counter === 20 ? copyState.counter = 0 : copyState.counter++
	
			this.setState({
			...copyState,
			counter: copyState.counter,
			currentBackgroundUrl: url,
			currentMovie: pickedMovie
		})
	}
		
	render(){
		let background = this.state.currentBackgroundUrl;
		
	return(
	  <div style={{backgroundImage: `url(${background})`}} id="landing">
		<Leftlanding/>
		<Mainlanding title={this.state.currentMovie.title} 
								 description={this.state.currentMovie.description}
								 releasedate={this.state.currentMovie.release_date} 
								 rating ={this.state.currentMovie.rating}/>
		<Rightlanding/>
	
	  </div>
  )
}
}

export default Landing;