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

    componentWillUnmount(){
        
    }
    handleSubmit = (e) => {
    if(e.preventDefault){ //If its a for submission prevent the browser from rendering.
        e.preventDefault();
    }
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${this.state.searchvalue}&language=en-US&page=1&include_adult=true`)
    .then(data => data.json())
    .then(parsedData => this.setState({results: parsedData.results}))
    .catch(err => {
        if(err){
            console.log(err);
        }
    })
    }

    handleChange = (e) => {
        
        const val = document.getElementById("inputbox").value;
        console.log(val)
        // const value = e.target.value;
        this.setState(prevState => {
             return {
                 ...prevState, searchvalue: val
            }
                 
        })
        this.handleSubmit(val);
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
                      upcomingbutton={this.props.upcomingbutton}
                      topratedbutton ={this.props.topratedbutton}
                      nowplayingbutton={this.props.nowplayingbutton}
                      popularbutton={this.props.popularbutton}
                      className="search"/>
                      
                <Movies movies={this.state.results}/>
            </section>
        )
    }
}

export default Search;