import React, {Component} from 'react';
import './Moviemodal.css';
import Loading from "../../Loading/Loading"
import StarRatings from 'react-star-ratings';

class Moviemodal extends Component {
    state={
        currentMovie: "",
        trailers : []
    }

    async componentDidMount(){
        
        const currentMovie = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${this.props.api}&language=en-US`)
        const currentMovieParsed = await currentMovie.json();
        const trailers = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=${this.props.api}&language=en-US`)
        const parsedTrailers = await trailers.json();
        this.setState({
            currentMovie: currentMovieParsed,
            trailers : parsedTrailers.results
        })
        }
    
    render(){   
        console.log(this.state);
        if(!this.state.currentMovie.id){
            return(
                <div className="loading">
                <Loading image={"https://cdn-images-1.medium.com/max/1600/0*3IFEy-hfoIpgFjBl.gif"} />
                </div>
            )
        }

        const backgroundImage = this.state.currentMovie.backdrop_path
        let backgroundURL = `https://image.tmdb.org/t/p/original${backgroundImage}`


        const productionCompanies = this.state.currentMovie.production_companies.map(val => {
            if(val.logo_path !== null){
               
            return (
                <div className="production_company">
                    <h3>{val.name}</h3>
                    <img width="100px" alt="productioncompany" src={`https://image.tmdb.org/t/p/original${val.logo_path}`}/>
                </div>
            )

        }})

        const movies = this.state.trailers.map(val => {
            return(

                <iframe width="200" height="200" 
                title={val.id}
                src={`https://www.youtube.com/embed/${val.key}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            )
        })
        

        
        
            return(
        <div className="individual_movie_page" style={
            {background: `url(${backgroundURL})`, 
            backgroundRepeat:`no-repeat`, 
            backgroundSize: "cover"}} >



            <div className="individual_movie_page_pane"> 
                
                


                <div id="individual_movie_page_pane_title">
                    <span>{this.state.currentMovie.original_title}</span>
                </div>

                <div id="individual_movie_page_pane_poster">
                    <a target="_blank" rel="noopener noreferrer" href={this.state.currentMovie.homepage}>
                        <img src= {`https://image.tmdb.org/t/p/original${this.state.currentMovie.poster_path}`} 
                        alt={this.state.currentMovie.tagline} 
                        width="200px"
                        />
                    </a>
                </div>

                <div id="individual_movie_page_pane_stars">
                    <StarRatings 
                        rating={this.state.currentMovie.vote_average/2}
                        numberOfStars={5}
                        starRatedColor="pink"   
                        />
                </div>


            
                <div id="individual_movie_page_pane_description">
                    <div>
                        <h3>Description</h3>
                        <p>{this.state.currentMovie.overview}</p>
                    </div>
                </div> 

                <div id="individual_movie_page_pane_imdb">
                    <div>
                    <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${this.state.currentMovie.imdb_id}/?ref_=nv_sr_1`}>
                        <img src={"https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"} alt={"imdb"} width="10%" height="10%"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${this.state.currentMovie.imdb_id}/videogallery?ref_=tt_ql_2`}> 
                        <img src="data:image/jpeg;base64,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" 
                        alt="imdb trailers" width="10%" height="10%"/>
                    </a>
                    </div>
                </div>

                <div id="individual_movie_page_pane_productioncompanies">
                    {productionCompanies}
                </div>

                <div id="individual_movie_page_pane_movies">
                    <div class="containermovies">
                        
                        {movies.slice(0, 10)}
                    </div>
                </div>
        
            
            
            </div>

        
               
            
            
            
    


        </div>



            ) 
    }
    
}



export default Moviemodal;