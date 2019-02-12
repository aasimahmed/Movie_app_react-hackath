import React from "react";
import "./Landing.css";
import Leftlanding from "./Leftlanding/Leftlanding";
import Mainlanding from "./Mainlanding/Mainlanding";
import Rightlanding from "./Rightlanding/Rightlanding";

const Landing = () => {
	
	return(
	  <div id="landing">
		<Leftlanding/>
		<Mainlanding/>
		<Rightlanding/>
	
	  </div>
  )
}

export default Landing;