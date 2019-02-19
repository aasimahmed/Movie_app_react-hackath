import React, {Component} from "react";
import "./Search.css";
import Form from "./Form/Form";
import Movies from "./Movies/Movies";

const MOVIE_API_KEY = "564528300769657f872709570897bb55";

class Search extends Component{
    state={
    searchvalue:"",
    results: [],
    nowplayingbutton: this.props.nowplayingbutton,
    topratedbutton: this.props.topratedbutton,
    upcomingbutton: this.props.upcomingbutton,
    popularbutton: this.props.popularbutton

    }

    handleSubmit = (e) => {
    if(e.preventDefault){ //If its a for submission prevent the browser from rendering.
        e.preventDefault();
    }
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${this.state.searchvalue}&language=en-US&page=1&include_adult=true`)
    .then(data => data.json())
    .then(parsedData => this.setState((prevState) => {
        return {
            ...prevState, results: parsedData.results
        }
    }))
    .catch(err => {
        if(err){
            console.log(err);
        }
    })
    }

    handleChange = (e) => {
        
        const value = document.getElementById("inputbox").value;
        // const value = e.target.value;
        this.setState({searchvalue: value})
        this.handleSubmit(value)
    }

    formButtonClicker = (e) => {
        const val = e.target.id;
        this.props.formButtonState(val);

    }

    render(){

        // we are checking if the state of an element is true or false.
        // if false we return a non selected class
        // if true we return a selected class.

        

        return(
            <section id="searchPane">
                <Form searchvalue ={this.state.searchvalue} 
                      handleSubmit={this.handleSubmit} 
                      handleChange={this.handleChange}
                      formButtonClicker={this.formButtonClicker}
                      upcomingbutton={this.state.upcomingbutton}
                      topratedbutton ={this.state.topratedbutton}
                      nowplayingbutton={this.state.nowplayingbutton}
                      popularbutton={this.state.popularbutton}
                      className="search"/>
                      
                <Movies movies={this.state.results}/>
            </section>
        )
    }
}

export default Search;