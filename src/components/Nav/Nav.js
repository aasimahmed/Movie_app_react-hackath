import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li id="movies">Movies</li>
                    <li>Tv Shows</li>
                    <li> <Link to="/cinemas">Cinemas </Link> </li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;