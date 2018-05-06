import React, {Fragment} from "react"
import Header from "./header";

export class SideBar extends React.Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img className="responsive-img" src="img/workflow.jpg"/>
                            </div>
                            <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
                            <a href="#name"><span className="white-text name">Search tools</span></a>
                            <a href="#email"><span className="white-text email">Discover available positions</span></a>
                        </div>
                    </li>
                    <li><a href="#"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#">Second Link</a></li>
                    <li><div className="divider"> </div></li>
                    <li><a className="subheader">Back to</a></li>
                    <li className="hide-on-med-and-up"><a className="waves-effect" href="#">Main</a></li>
                    <li className="hide-on-med-and-up"><a className="waves-effect" href="#">About Us</a></li>
                    <li className="hide-on-med-and-up"><a className="waves-effect" href="#">Our Partners</a></li>
                    <li className="hide-on-med-and-up"><a className="waves-effect" href="#">Our Employees</a></li>
                    <li className="hide-on-med-and-up"><a className="waves-effect" href="#">Contact Us</a></li>
                </ul>
            </Fragment>
        )
    }
}