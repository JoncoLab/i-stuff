import React from "react"

const navBarStyles = {
    margin: "0 20px 0 0"
};

const Header = (props) => (
    <header>
        <nav className="grey darken-3 white-text" role="navigation">
            <div className="nav-wrapper row">
                <a href="#" data-target="slide-out" className="sidenav-trigger white-text left show-on-medium-and-up"><i className="material-icons large">menu</i></a>
                <span className="logo flow-text center-align col m3 push-m4">iStaff <span className="slogan">MADE SIMPLE</span></span>
                <ul className="hide-on-med-and-down right" style={navBarStyles}>
                    <li><a className="white-text" href="./landing.html"><i className="material-icons">arrow_back</i></a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;