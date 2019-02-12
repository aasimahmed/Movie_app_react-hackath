import React from "react";
import "./Mainlanding.css";

const Mainlanding = ({title, description, rating, releasedate, background}) => {
    return(
        <div className="mainlanding_card" style={{backgroundImage: `url(${background})`}}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{rating}</p>
          <p>Release Date : {releasedate}</p>
        </div>

    )
}

export default Mainlanding;