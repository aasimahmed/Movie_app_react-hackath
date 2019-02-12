import React from "react";
import "./Mainlanding.css";

const Mainlanding = ({title, description, rating,releasedate}) => {
    return(
        <div>
          <p>{title}</p>
          <p>{description}</p>
          <p>{rating}</p>
          <p>{releasedate}</p>
        </div>

    )
}

export default Mainlanding;