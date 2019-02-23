import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <header>
            <nav>
                
                <a href="https://github.com/aasimahmed" target="_blank" rel="noopener noreferrer"> <i class="fab fa-github fa-7x"></i></a>
                <ul>
                    <li id="movies"><a href="#searchPane">Movies</a></li>
                    <li> <Link to="/cinemas">Cinemas </Link> </li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;