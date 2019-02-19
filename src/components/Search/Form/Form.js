import React from "react";
import "./Form.css";


const Form = ({handleChange, handleSubmit, searchvalue, formButtonClicker, nowplayingbutton, upcomingbutton, popularbutton, topratedbutton}) => {
    
    return(
    <div className="form_container">
        <form onSubmit={handleSubmit} className="form_subcontainer" autoComplete="off">
            <li onClick={formButtonClicker} style={{backgroundColor: (nowplayingbutton ? "#0eb291" : "black")}} id="nowplayingbutton">Now Playing</li>
            <li onClick={formButtonClicker} style={{backgroundColor: (upcomingbutton ? "#0eb291" : "black")}}id="upcomingbutton" >Upcoming</li>
            <li onClick={formButtonClicker} style={{backgroundColor: (popularbutton ? "#0eb291" : "black")}}id="popularbutton" >Popular</li>
            <li onClick={formButtonClicker} style={{backgroundColor: (topratedbutton ? "#0eb291" : "black")}}id="topratedbutton" >Top Rated</li>
            
            <li id="inputButton">             
                <input id="inputbox" type="text" placeholder="Search ..." value={searchvalue} 
                onChange={handleChange} 
                onKeyDown = {(e) => {
                    if(e.which === 13){
                        handleSubmit(e)
                
                    }}}/>
                     <i onClick={handleSubmit}className="fas fa-search fa-2x searchIcon"></i>
            </li>
            
        </form>
    </div>
    )
}

export default Form;