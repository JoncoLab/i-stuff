import React from "react"
import {Link} from "react-router-dom"

const navBarStyles = {
    margin: "0 20px 0 0"
};

const Header = (props) => (
    <header>
        <nav className="grey darken-3 white-text" role="navigation">
            <div className="nav-wrapper row">
                <a href="#" data-target="slide-out" className="sidenav-trigger white-text left show-on-medium-and-up col s2 m2"><i className="material-icons large">menu</i></a>
                <span className="logo flow-text center-align col m8 s7">iStaff <span className="slogan">MADE SIMPLE</span></span>
                <ul className="hide-on-med-and-down right" style={navBarStyles}>
                    <li><Link to="/"><i className="white-text material-icons">arrow_back</i></Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;