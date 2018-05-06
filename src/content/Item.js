import React from "react"
import * as $ from "jquery"
import * as M from "materialize-css"

export class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.itemEvent = this.itemEvent.bind(this);
        this.itemRender = this.itemRender.bind(this);
    }

    itemEvent() {
        this.setState({
            active: !this.state.active
        });
    }

    itemRender() {
        let content;
        if(this.state.active === true) {
            content = (
                <div className="item grey lighten-5 z-depth-2">
                    <div className="row">
                        <div className="description col s12 m8">
                            <div className="row">
                                <h2 className="flow-text grey-text text-darken-3 left-align col s8">Job Description</h2>
                                <span className="flow-text grey-text text-darken-1 right-align col s4">Share</span>
                            </div>
                            <div className="title">
                                <h4>Title: <span id="title">VARIABLE</span></h4>
                                <h4>Location: <span id="locations">VARIABLE</span></h4>
                            </div>
                            <p className="flow-text grey-text text-darken-3 left-align">
                                Kuhli loach codling frilled shark California halibut plownose chimaera--scat Reedfish;
                                California flyingfish rockfish stream catfish flying gurnard, "plownose chimaera."
                                Alaska blackfish tubeblenny yellowtail clownfish kahawai soldierfish tench smalleye squaretail.
                                Perch sheatfish, mosshead warbonnet halfbeak tope slimy mackerel zebra lionfish
                                sleeper trout Reef triggerfish false brotula.
                            </p>
                            <div className="responsibilities">
                                <h4 className="flow-text grey-text text-darken-3 left-align">Responsibilities:</h4>
                                <ul>
                                    <li>Manage backup services for Data Center and Remote (WAN attached) Servers</li>
                                    <li>Proactively manage server performance.</li>
                                    <li>Proactively manage storage performance.</li>
                                    <li>Troubleshoot HW and Server applications</li>
                                </ul>
                            </div>
                            <div className="requirements">
                                <h4 className="flow-text grey-text text-darken-3 left-align">Requirements:</h4>
                                <ul>
                                    <li>Cisco UCS Experience</li>
                                    <li>Cisco networking Experience</li>
                                    <li>Citrix Experience</li>
                                    <li>Anti-Virus Management</li>
                                </ul>
                            </div>
                            <div className="nice-to-have">
                                <h4 className="flow-text grey-text text-darken-3 left-align">Nice to have:</h4>
                                <ul>
                                    <li>SharePoint Server administration</li>
                                    <li>Office 365 Migration and Management experience</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col s12 m3 push-m1 apply">
                            <div className="row">
                                <span className="flow-text grey-text text-darken-1 col s12 left-align" id="apply-date">16 hours ago</span>
                                <span className="flow-text grey-text text-darken-3 col s12" id="apply-caption">Front-end developer</span>
                                <span className="flow-text grey-text text-darken-2 col s12 sup-caption" id="apply-category">IT/ Web-development</span>
                                <span className="flow-text grey-text text-darken-1 col s12 left-align" id="apply-location">Varosh, Ukraine</span>
                            </div>
                            <button
                                data-trget="modal1"
                                className="btn modal-trigger col s12 btn-large green lighten-1"
                                onClick={() => $("#modal1").modal("open")}
                            >Apply</button>
                            <div id="modal1" className="modal">
                                <form className="modal-content row" method="POST">
                                    <input className="col s12" type="email" name="email" id="email" placeholder="Enter your e-mail" required={true}/>
                                    <input className="col s6" name="first-name" id="first-name" placeholder="Enter your first-name" required={true}/>
                                    <input className="col s6" name="last-name" id="last-name" placeholder="Enter your last-name" required={true}/>
                                    <input className="col s12" type="tel" name="tel" id="tel" placeholder="Enter your phone number" required={true}/>
                                </form>
                                <div className="modal-footer">
                                    <button className="waves-effect waves-light btn" type="submit" id="submit">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if(this.state.active === false) {
            content = (
                <div  className="item-preview content grey lighten-5 z-depth-2" onClick={this.itemEvent}>
                    <div className="row">
                        <span className="flow-text grey-text text-darken-3 col s12 m6" id="caption">Front-end developer</span>
                        <span className="flow-text grey-text text-darken-1 col s6 m3 center-align" id="location">Varosh, Ukraine</span>
                        <span className="flow-text grey-text text-darken-1 col s6 m3 center-align" id="date">16 hours ago</span>
                        <span className="flow-text grey-text text-darken-2 col s12 sup-caption" id="category">IT/ Web-development</span>
                    </div>
                    <div className="row">
                        <p className="flow-text grey-text text-darken-1 col s12" id="description">asdf asdlfiwe welirho hslajdf vkdb werbb erwkejksd skdjfew wekr msdf asdf asdlfiwe welirho hslajdf vkdb werbb</p>
                    </div>
                </div>
            );
        }
        return content;
    }

    render() {
        console.log(this.state.active);
        return this.itemRender()
    }
}