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
import Loading from "../Loading/Loading";

const MOVIE_API_KEY = "564528300769657f872709570897bb55";


class App extends Component{
    state = {
			loading: true,
			nowplaying: [],
			popular: [],
			toprated : [],
			upcoming: [],
    		formButtons : {
        		upcomingbutton: false,
        		nowplayingbutton: false,
        		popularbutton : false,
				topratedbutton : true
			},
			location: {},
			arrowState : {
				nowplaying : false,
				popular : false,
				toprated : false,
				upcoming : false
			},
			movies: [

			]
    }

    
	

     async componentDidMount(){
		  
			const nowplaying = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIE_API_KEY}&language=en-US&page=1`)
			const parsedNowplayingFilms = await nowplaying.json();
			const popular = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}&language=en-US`)
			const parsedPopularFilms = await popular.json();
			const upcoming = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${MOVIE_API_KEY}&language=en-US&page=1`)
			const parsedUpcomingFilms = await upcoming.json();
			const toprated = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIE_API_KEY}&language=en-US&page=1`);
			const parsedTopratedFilms= await toprated.json();
			const location = await fetch("http://ip-api.com/json/");
			const parsedLocation = await location.json();
			setTimeout(() => this.setState({
				loading: false,
				nowplaying: parsedNowplayingFilms.results,
				popular : parsedPopularFilms.results,
				toprated: parsedTopratedFilms.results,
				upcoming: parsedUpcomingFilms.results,
				location : {...parsedLocation}
			}), 5000)

				
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

		leftSlide = (e) => {
		 const target = e.target.id
		 const targetArray = target.toLowerCase().split(" ").join("");
		 this.setState((prevState) => {
			 const popped = prevState[targetArray].pop();
			 prevState[targetArray].unshift(popped);
			 console.log(prevState);
			 return {
				targetArray : prevState,
				arrowState : {
					...prevState.arrowState,
					[target] : !prevState.arrowState[target]
			 }
		 }}
		 )
		}


		setArrowState = (e) => {
			console.log("setting");
			const target = e.target.id;
			this.setState(prevState => {
			return {
				arrowState : {
					...prevState.arrowState,
					[target] : !prevState.arrowState[target]
				}
			
			}
		})
	}


    render(){
			const {loading} = this.state;
			if(loading){
				
				return (
					<div className="loading">
						<Loading image={"https://cdn-images-1.medium.com/max/1600/0*3IFEy-hfoIpgFjBl.gif"} />
					</div>
				)
			}
			

			return(
				
					<Router>
							<div className="app" >
							<Nav/>

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
							leftSlide={this.leftSlide}
							setArrowState={this.setArrowState}
							arrowState={this.state.arrowState}
							/>} />

							<Route exact path="/cinemas" render={(props, nowplaying, location) => <Cinemapage {...props} location={this.state.location} nowplaying={this.state.nowplaying} api={MOVIE_API_KEY}/>} />
							<Route exact path="/movie/:id" render={(props) => <Moviemodal {...props} api={MOVIE_API_KEY} /> } />
							<Route exact path="/search" component={Search}/>
							</div>
					</Router>
						)
					}}
  


export default App;
