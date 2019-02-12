import React, { Component } from 'react';
import './App.css';
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing"
import Search from "../Search/Search";

class App extends Component{
    state = {

    }

    componentDidMount(){

    }

    render(){
        return(
        	<div>
						<Nav/>
						{/* <Landing/>
						<Search/> */}

          </div>
        )
    }
}

export default App;
