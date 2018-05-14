import React, {Fragment} from "react"
import {Link} from "react-router-dom"

export class AdminHeader extends React.Component {
    render() {
        return (
            <Fragment>
                <nav role="navigation" className="black">
                    <div className="nav-wrapper row">
                        <a href="#" data-target="slide-out" className="sidenav-trigger white-text left hide-on-med-and-up col s2 m2"><i className="material-icons large">menu</i></a>
                        <span className="flow-text light col s6 m4 center-align white-text">iStaff Admin</span>
                        <ul className="hide-on-med-and-down">
                            <li><Link className="white-text" to={"/vacancies"}>Vacancies</Link></li>
                            <li><a className="white-text" href="#main">Main</a></li>
                            <li><a className="white-text" href="#about-us">About Us</a></li>
                            <li><a className="white-text" href="#our-employers">Our Employees</a></li>
                            <li><a className="white-text" href="#contact-us">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav">
                    <li><div className="divider hide-on-med-and-up"> </div></li>
                    <li><Link to={"/vacancies"}>Vacancies</Link></li>
                    <li><div className="divider hide-on-med-and-up"> </div></li>
                    <li><a className="black-text" href="#main">Main</a></li>
                    <li><div className="divider hide-on-med-and-up"> </div></li>
                    <li><a className="black-text" href="#about-us">About Us</a></li>
                    <li><div className="divider hide-on-med-and-up"> </div></li>
                    <li><a className="black-text" href="#our-employers">Our Employees</a></li>
                    <li><div className="divider hide-on-med-and-up"> </div></li>
                    <li><a className="black-text" href="#contact-us">Contact Us</a></li>
                </ul>
            </Fragment>
        )
    }
}