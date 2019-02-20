import React, {Component} from "react";
import "./Cinemapage.css"


class Cinemapage extends Component {

    state={
        location: {
            ipapi: {},
            googleapi: {}

            // "query": "24.48.0.1",
            // "status": "success",
            // "country": "Canada",
            // "countryCode": "CA",
            // "region": "QC",
            // "regionName": "Quebec",
            // "city": "Québec",
            // "zip": "G1X",
            // "lat": 46.7749,
            // "lon": -71.3344,
            // "timezone": "America/Toronto",
            // "isp": "Le Groupe Videotron Ltee",
            // "org": "Videotron Ltee",
            // "as": "AS5769 Videotron Telecom Ltee"
        },
        localCinemas : {

        },
        nowPlaying : [...this.props.nowPlaying]
}

    componentDidMount(){
        // fetch for location using googleapi 
        // if exists fetch forlocal cinemas off the location
        //  Google geolocation api for most users, else IPFETCH 
        if ("geolocation" in navigator){ //If geolocation is available ask for it, get it then reverse for address, set this all as googlelocation
            navigator.geolocation.getCurrentPosition(
            (data) => {
                const {coords} = data
                this.setState({location: {
                    latitude : coords.latitude,
                    longitude: coords.longitude
                }})
            const GOOGLE_REVERSEGEO_URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&key=AIzaSyC6yLpCQqiV0CDCHAuuGOfUTcDWNHvPhn4`
                fetch(GOOGLE_REVERSEGEO_URL)
                .then(data => data.json())
                .then(parsedData => {
                    this.setState((prevState) => {
                        return {
                            location: {
                                ...prevState.location,
                                googleapi: 
                                    parsedData
                                
                            }
                        }
                    })} 
                        
                    
            )})
            
            }
        
            fetch("http://ip-api.com/json/") //This gives much more info
            .then(data => data.json())
           .then(parsedData => {
               console.log(parsedData)
           this.setState((prevState) => {
           return{
            location: {...prevState.location},
            ipapi :  
            parsedData
           }    
           }
          )})

          console.log(this.state);
        }
    
//         fetch("") //uses current ip
//         data response: {
//             "query": "24.48.0.1",
//             "status": "success",
//             "country": "Canada",
//             "countryCode": "CA",
//             "region": "QC",
//             "regionName": "Quebec",
//             "city": "Québec",
//             "zip": "G1X",
//             "lat": 46.7749,
//             "lon": -71.3344,
//             "timezone": "America/Toronto",
//             "isp": "Le Groupe Videotron Ltee",
//             "org": "Videotron Ltee",
//             "as": "AS5769 Videotron Telecom Ltee"
//           }
// }
    
    render(){

        return(
            <div className="cinemapage">
                <h3> Showtime </h3>
                <input type="text" placeholder="Enter your postcode"/>
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