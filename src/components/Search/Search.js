import React, {Component} from "react";
import "./Search.css";
import Form from "./Form/Form";
import Movies from "./Movies/Movies";

const MOVIE_API_KEY = "564528300769657f872709570897bb55";

class Search extends Component{
    state={
    searchvalue:"",
    results: [],
    movieButton: true,
    tvShowsButton: false
    }

    handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${this.state.searchvalue}&language=en-US&page=1&include_adult=true`)
    .then(data => data.json())
    .then(parsedData => this.setState((prevState) => {
        return {
            ...prevState, results: parsedData.results
        }
    }))
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({searchvalue: value})
    }

    toggle = (e) => {
        e.target.id === "movieButton" ? this.setState((prevState) =>{
          return{
              movieButton: !prevState.movieButton,
              tvShowsButton: !prevState.tvShowsButton
          }    
        }) : this.setState((prevState) => {
            return {
            movieButton : !prevState.movieButton,
            tvShowsButton : !prevState.tvShowsButton
            } 
        })}

    render(){

        // we are checking if the state of an element is true or false.
        // if false we return a non selected class
        // if true we return a selected class.
        const movieButtonSelected = this.state.movieButton 
        const tvShowsButtonSelected = !movieButtonSelected;
        

        return(
            <section className="form">
                <Form searchvalue ={this.state.searchvalue} 
                      handleSubmit={this.handleSubmit} 
                      handleChange={this.handleChange}
                      toggle={this.toggle}
                      movieButtonSelected = {movieButtonSelected}
                      tvShowsButtonSelected = {tvShowsButtonSelected}
                      className="search"/>
                      
                <Movies movies={this.state.results}/>
            </section>
        )
    }
}

export default Search;