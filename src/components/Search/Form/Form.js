import React from "react";
import "./Form.css";


const Form = ({handleChange, handleSubmit, searchvalue}) => {
    
    return(
    <div className="form_container">
        <form onSubmit={handleSubmit} className="form_subcontainer">
            <li id="nowplayingbutton">Now Playing</li>
            <li id="upcomingbutton" >Upcoming</li>
            <li id="popularbutton" >Popular</li>
            <li id="topratedbuton" >Top Rated</li>
            
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