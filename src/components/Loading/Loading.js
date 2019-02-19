import React from "react";
import "./Loading.css";

const Loading = ({image}) => {
 return (
        <img className="loading" src={image} alt={"loadingimage"}/>
 )
}

export default Loading;