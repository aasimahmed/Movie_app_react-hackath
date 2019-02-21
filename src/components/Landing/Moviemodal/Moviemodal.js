import React, {Component} from 'react';
import './Moviemodal.css';
import Loading from "../../Loading/Loading"



class Moviemodal extends Component {
    state={
        currentMovie: ""
    }

    async componentDidMount(){
        
        const currentMovie = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${this.props.api}&language=en-US`)
        const currentMovieParsed = await currentMovie.json();
        this.setState({
            currentMovie: currentMovieParsed
        })
        }
    
    render(){
        
        if(!this.state.currentMovie.id){
            return(
                <div className="loading">
                <Loading image={"https://cdn-images-1.medium.com/max/1600/0*3IFEy-hfoIpgFjBl.gif"} />
                </div>
            )
        }
        console.log(this.state.currentMovie)

        const backgroundImage = this.state.currentMovie.backdrop_path
        let backgroundURL = `https://image.tmdb.org/t/p/original${backgroundImage}`


        const productionCompanies = this.state.currentMovie.production_companies.map(val => {
            if(val.logo_path !== null){
               
            return (
                <div>
                <h3>{val.name}</h3>
                <img width="100px" alt="productioncompany" src={`https://image.tmdb.org/t/p/original${val.logo_path}`}/>
                </div>
            )
            }else{
                
            }
        })
        
            return(
        <div className="individual_movie_page" style={
            {background: `url(${backgroundURL})`, 
            backgroundRepeat:`no-repeat`, 
            backgroundSize: "cover"}} >
        
        <div className="individual_movie_page_pane"> 
            <a target="_blank" rel="noopener noreferrer" href={this.state.currentMovie.homepage}>
                <img src= {`https://image.tmdb.org/t/p/original${this.state.currentMovie.poster_path}`} 
                alt={this.state.currentMovie.tagline} 
                width="300px"
             />
            </a>
            <h2>{this.state.currentMovie.original_title}</h2>

            <p>{this.state.currentMovie.overview}</p>
            <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${this.state.currentMovie.imdb_id}/?ref_=nv_sr_1`}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"} alt={"imdb"} width="100px" height="100px"/>
            </a>


            <p><a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${this.state.currentMovie.imdb_id}/videogallery?ref_=tt_ql_2`}> IMDB Trailers </a></p> 
            </div>
            
            <div className="productionCompanies">
                {productionCompanies}
            </div>
            
        

        </div>
            ) 
    }
    
}



export default Moviemodal;