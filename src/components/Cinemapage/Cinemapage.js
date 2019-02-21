import React, {Component} from "react";
import "./Cinemapage.css"


class Cinemapage extends Component {

    state={
        location: this.props.location,
        nowplaying : this.props.nowplaying,
        localCinemas: {},

}

    componentDidMount(){
        console.log(this.props.location.zip)
         fetch(`api.cinelist.co.uk/search/cinemas/postcode/${this.props.location.zip}`)
         .then(data => console.log(data)) //TODO - THIS DATA NEEDS TO BE DEALT WITH

    }

    
    render(){
        

        return(
            <div className="cinemapage" >
                <h3>Showtime </h3>
                <input type="text" placeholder="Enter your postcode"/>
                <p>curently showing all cinemas near:</p>
                
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