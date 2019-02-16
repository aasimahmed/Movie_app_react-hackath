import React, {Component} from 'react';
import './Moviemodal.css';

class Moviemodal extends Component {
    state={
        currentMovie: ""
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${this.props.api}&language=en-US`)
        .then(data => data.json())
        .then(parsed => {
             this.setState({
                 currentMovie: {...parsed}
             })
        })
        }
    
    render(){
        if(!this.state.currentMovie.id){
            return(
                <div>
                    <h2>loading</h2>
                </div>
            )
        }
        else{
            return(
        <div>
        <img src= {`https://image.tmdb.org/t/p/original${this.state.currentMovie.poster_path}`} 
             alt={this.state.currentMovie.tagline} 
             width="100px"/>
        <h2>{this.state.currentMovie.original_title}</h2>
        </div>
            ) 
    }
    
}

}

export default Moviemodal;