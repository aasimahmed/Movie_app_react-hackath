import React, {Component} from "react";
import "./Cinemapage.css"
import Loading from "../Loading/Loading";
import Cinemapageslider from "../Cinemapageslider/Cinempageslider";
import Moviesection from "../Moviesection/Moviesection";


class Cinemapage extends Component {

    state={
        location: this.props.city,
        nowplaying : this.props.nowplaying,
        localCinemas: null,
        filmTimes: {
            dayOffset: 1,
            allLocalCinemaListings : []
        },
        selectedFilm: {

        },
        selectedCinema: {

        }

}

    async componentDidMount(){
        console.log(this.props.location.city)
        const locationData = await fetch(`https://api.cinelist.co.uk/search/cinemas/location/${this.props.location.city}`);
        const parsedData = await locationData.json();
        this.setState({
            localCinemas : parsedData.cinemas
        })
        const getCinemaTimes = setInterval(() => {
          if(this.state.localCinemas === null || this.state.filmTimes.allLocalCinemaListings.length > 0){
              console.log("doingnothing")
          }else{  
          clearInterval(getCinemaTimes)
          this.findCinemas(this.state.filmTimes.dayOffset, this.state.localCinemas)  //check if we have a stated location. If we do then search for all location films.
          }
        }, 2000)
        
    }
    componentWillUnmount (){
        clearInterval(this.getCinemaTimes)
    }

     findCinemas = (dayoffset, cinemas) => {
        const stringedCinemas = cinemas.map(val => {
             return val.id
         }).join(",");
         

         //check if we have location
         fetch(`https://api.cinelist.co.uk/get/times/many/${stringedCinemas}?day=${this.state.dayOffset}`)
         .then(data => data.json())
         .then(parsedData => this.setState((prevState) =>  
                    ({
                        filmTimes: {
                            ...prevState.filmTimes,
                            allLocalCinemaListings : parsedData.results 
                        }
                    })
                    ))

        }
    
    render(){




        if(this.state.filmTimes.allLocalCinemaListings.length === 0){
            return <Loading image={`https://cdn-images-1.medium.com/max/1600/0*3IFEy-hfoIpgFjBl.gif`}/>
        }


        const nowplaying = this.props.nowplaying;

        

        return(
            <div className="cinemapage" >
                <h3>Showtime </h3>
                <Moviesection movies={nowplaying} title={"Pick a film"}shouldShow={true} />
                <input type="text" placeholder="Enter your postcode"/>
                <p>curently showing all cinemas near:</p>

                {}
                
            </div>  
        )

    } 

}



//COMPONENTS
//Fetching on componentDidMount, this fetchs, if postcode detcted.







export default Cinemapage;

//DOCS
//LOCATION:
//api.cinelist.co.uk/search/cinemas/postcode/:POSTCODE which we prompt user for
//api.cinelist.co.uk/search/cinemas/location/:location prompt user for
/*"status":"ok", ONLY GET FOR LOCATION
"postcode":"AL12JF",
"cinemas":[
   {
      "distance":0.7,
      "name":"The Odyssey, St Albans, Hertfordshire",
      "id":"9105*/


//CINEMA TIMINGS:
//just 1
//api.cinelist.co.uk/get/times/cinema/${venueID}?day=<>

//more than 1 each venue seperated by commas
//api.cinelist.co.uk/get/times/many/:venueIDs?day=<INT>


//CINEMA DETAILS
//api.cinelist.co.uk/get/cinema/:venueID

/*
Workflow - Get user location in comp did mount,
get local cinemas to user 
get times for all movies nowPlaying.

COMPONENTS:
CART - EXTERNAL TO ALL



render:
Display movie choices to user
Then search for times available at local cinema(s) for next available showings - show times cinema.
//Give user the option to filter for a specific day using a calendar? or allow user to select a day - we have the offset query for this.

Once movie is selected present movie and date showing, then allow user to buy tickets => transfer to a cart.

Cart can take payment.


*/