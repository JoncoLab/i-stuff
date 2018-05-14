import React, {Fragment} from "react"
import "../landing.css"
import {Link} from "react-router-dom"
import {LandingHeader} from "./landing-header"

export class Landing extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="introduction-top container hide-on-med-and-down">
                    <div className="row">
                        <h2 className="flow-text light col m2 push-m4 s4 left-align black-text">iStaff</h2>
                        <h2 className="flow-text light col m4 push-m2 s8 right-align black-text">MADE SIMPLE</h2>
                    </div>
                </div>

                <div className="parallax-container" id="index-banner main-screen main">
                    <LandingHeader/>
                    <div className="container section">

                        <div className="row">
                            <h2 className="white-text light flow-text center-align col s12 m6 push-m3">Get Started Today!</h2>
                            <h2 className="white-text light flow-text center-align col s12 m8 push-m2">And Start Enjoying the Benefits of Getting Your Jobs Done.</h2>
                        </div>
                    </div>
                    <div className="parallax"><img width="100" src="./img/main-bg.jpg" alt="Unsplashed background img 1"/></div>
                </div>

                <div className="container" id="about-us">
                    <div className="row center">
                        <h3 className="caption">About Us</h3>
                    </div>

                    <div className="row">
                        <i className="material-icons center-align col m4 s2">code</i>
                        <h5 className="flow-text col m8 s10 right-align">OUR IT RECRUITING DIVISION PROVIDES CONTRACT, CONTRACT-TO-PERMANENT, AND PERMANENT PLACEMENT SOLUTIONS ON A NATIONAL BASIS.</h5>
                    </div>

                    <div className="row">
                        <h6 className="flow-text col m4 s12">We have the ability to technically test on almost any skill set, and our team of Senior IT Recruiters has the expertise to qualify candidates beyond keywords on a resume.</h6>
                        <h6 className="flow-text col m4 push-m1 s10">This, combined with our ability to build strong relationships with our clients and candidates, is why we are leaders at keeping Top Talent engaged throughout the recruiting process.</h6>
                        <i className="material-icons center-align col m4 s2">extension</i>
                    </div>
                </div>

                <div className="grey lighten-2" id="our-employers">
                    <div className="container section">
                        <h3 className="caption">Our Team</h3>

                        <div className="carousel">
                            <div className="person carousel-item">
                                <img className="responsive-img z-depth-3" src="./img/evgen.jpg" alt="Employer photo"/>
                                <p className="name center-align flow-text grey-text text-darken-3">Evgen Synetar</p>
                                <p className="position center-align flow-text">CEO</p>
                            </div>
                            <div className="person carousel-item">
                                <img className="responsive-img z-depth-3" src="./img/julia.jpg" alt="Employer photo"/>
                                <p className="name center-align flow-text grey-text text-darken-3">Julia Pisarenko</p>
                                <p className="position center-align flow-text">HR (Human Resources)</p>
                            </div>
                            <div className="person carousel-item">
                                <img className="responsive-img z-depth-3" src="./img/gabriela.jpg" alt="Employer photo"/>
                                <p className="name center-align flow-text grey-text text-darken-3">Gabriela Mazyutynets</p>
                                <p className="position center-align flow-text">Project Manager</p>
                            </div>
                            <div className="person carousel-item">
                                <img className="responsive-img z-depth-3" src="./img/yana.jpg" alt="Employer photo"/>
                                <p className="name center-align flow-text grey-text text-darken-3">Yana Kaydi</p>
                                <p className="position center-align flow-text">Copywriter</p>
                            </div>
                            <div className="person carousel-item">
                                <img className="responsive-img z-depth-3" src="./img/petro.jpg" alt="Employer photo"/>
                                <p className="name center-align flow-text grey-text text-darken-3">Petr Shandali</p>
                                <p className="position center-align flow-text">Talent researcher</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="parallax-container" id="contact-us">
                    <div className="container section no-pad-bot">

                        <div className="row center">
                            <h3 className="caption white-text">Contact Us</h3>
                        </div>
                        <div className="row">
                            <div className="col m5 push-m2 s12">
                                <h4 className="flow-text white-text">Have some questions?</h4>
                                <ul className="flow-text white-text">
                                    <li><h5>Get in touch and contact Us:</h5></li>
                                    <li><h6>+090-250-60-00</h6></li>
                                    <li><h6>+380-66-996-64-26</h6></li>
                                </ul>
                                <ul className="flow-text white-text">
                                    <li><h5>or feel free to e-mail us:</h5></li>
                                    <li><h6>info@istaff.sk</h6></li>
                                    <li><h6>e.synetar@icloud.com</h6></li>
                                </ul>
                            </div>
                            <iframe className="col m5 s12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433.71835608900574!2d22.29954104026481!3d48.62550494767722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919b68473098d%3A0x650f1ca2da9ac18a!2z0KDRltC-INCf0LvQsNC30LA!5e0!3m2!1suk!2sua!4v1525955001679" height="300" frameBorder={0}/>
                        </div>
                    </div>
                    <div className="parallax"><img width="100" src="./img/contact-us-bg.jpg" alt="Unsplashed background img 2"/></div>
                </div>
            </Fragment>
        )
    }
}