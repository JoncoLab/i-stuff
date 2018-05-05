import React from "react"

const navBarStyles = {
    margin: "0 20px 0 0"
};

const Header = (props) => (
    <header>
        <nav className="grey darken-3 white-text" role="navigation">
            <div className="nav-wrapper row">
                <a href="#" data-target="slide-out" className="sidenav-trigger white-text left show-on-medium-and-up"><i className="material-icons large">menu</i></a>
                <ul className="hide-on-med-and-down right" style={navBarStyles}>
                    <li><a className="white-text" href="#main">Main</a></li>
                    <li><a className="white-text" href="#about-us">About Us</a></li>
                    <li><a className="white-text" href="#our-partners">Our Partners</a></li>
                    <li><a className="white-text" href="#our-employers">Our Employees</a></li>
                    <li><a className="white-text" href="#contact-us">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;