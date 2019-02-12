import React from "react";
import "./Form.css";


const Form = ({handleChange, handleSubmit, searchvalue}) => {
    return(
    <div className="form_container">
        <form onSubmit={handleSubmit} className="form_subcontainer">
            <li>Movies</li>
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
            <li>Tv Shows</li>
        </form>
    </div>
    )
}

export default Form;