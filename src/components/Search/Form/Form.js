import React from "react";
import "./Form.css";


const Form = ({handleChange, handleSubmit, searchvalue, formButtonClicker, nowplayingbutton, upcomingbutton, popularbutton, topratedbutton}) => {
    
    return(
    <div className="form_container">
        <form onSubmit={handleSubmit} className="form_subcontainer" autocomplete="off">
            <li onClick={formButtonClicker} style={{backgroundColor: (nowplayingbutton ? "#e969d8" : "white")}} id="nowplayingbutton">Now Playing</li>
            <li onClick={formButtonClicker} style={{backgroundColor: (upcomingbutton ? "#e969d8" : "white")}}id="upcomingbutton" >Upcoming</li>
            <li onClick={formButtonClicker} style={{backgroundColor: (popularbutton ? "#e969d8" : "white")}}id="popularbutton" >Popular</li>
            <li onClick={formButtonClicker} style={{backgroundColor: (topratedbutton ? "#e969d8" : "white")}}id="topratedbutton" >Top Rated</li>
            
            <li id="inputButton">             
                <input id="inputbox" type="text" placeholder="Search ..." value={searchvalue} 
                onChange={handleChange} 
                onKeyDown = {(e) => {
                    if(e.which === 13){
                        handleSubmit(e)
                    }else{
                        return;
                    }
                    }}/>
                     <i onClick={handleSubmit}className="fas fa-search fa-2x searchIcon"></i>
            </li>
            
        </form>
    </div>
    )
}

export default Form;