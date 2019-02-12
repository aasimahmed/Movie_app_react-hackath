import React, {Component} from "react";
import "./Search.css";
import Form from "./Form/Form";
import Movies from "./Movies/Movies";

const MOVIE_API_KEY = "564528300769657f872709570897bb55";

class Search extends Component{
    state={
    searchvalue:"",
    results: []
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

    render(){
        return(
            <section className="form">
                <Form searchvalue ={this.state.searchvalue} 
                      handleSubmit={this.handleSubmit} 
                      handleChange={this.handleChange}
                      className="search"/>
                <Movies movies={this.state.results || undefined}/>
            </section>
        )
    }
}

export default Search;