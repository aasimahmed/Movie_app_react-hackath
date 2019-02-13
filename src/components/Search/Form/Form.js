import React from "react";
import "./Form.css";


const Form = ({handleChange, handleSubmit, searchvalue, toggle, movieButtonSelected, tvShowsButtonSelected}) => {
    
    return(
    <div className="form_container">
        <form onSubmit={handleSubmit} className="form_subcontainer">
            <li id="movieButton" onClick={toggle} style={{backgroundColor: (movieButtonSelected ? "pink" : "black")}}>Movies</li>
            <input type="text" placeholder="Search ..." value={searchvalue} 
            onChange={handleChange} 
            onKeyDown = {(e) => {
                if(e.which === 13){
                    handleSubmit(e)
                }else{
                    return;
                }
            }}
            />
            <li id="tvShowsButton" style={{backgroundColor: (tvShowsButtonSelected ? "pink" : "black")}} onClick={toggle}>Tv Shows</li>
        </form>
    </div>
    )
}

export default Form;