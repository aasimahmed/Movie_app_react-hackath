import React, {Component} from "react";
import "./Cinemapage.css"


class Cinemapage extends Component {

    state={
        location: ""
}

    componentDidMount(){

}
    
    render(){
        console.log(this.props.match);
        console.log(this.props.nowPlaying)

        return(

            <h3> Cinema part where I can search my local cinemas</h3>
        )

    } 

}







export default Cinemapage;