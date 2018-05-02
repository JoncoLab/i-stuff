import React from "react"

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
        this.state.active ?
            content = (
                <div className="item container">
                    <div className="row">
                        <div className="description col s12 m9">
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
                        <div className="col s12 m2 push-m1">
                            <h3>
                                <span className="position">Front-end developer</span><br/>
                                <span className="category">Web-development</span>
                            </h3>
                            <span className="city">Varosh, Ukraine</span>
                            <button className="waves-effect waves-light btn modal-trigger" data-target="modal1">Modal</button>
                            <div id="modal1" className="modal">
                                <div className="modal-content">
                                    <h1>Hello</h1>
                                </div>
                                <div className="modal-footer">
                                    <button className="modal-close waves-effect waves-green btn-flat">Agree</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) :
            content = (
                <div  className="item-preview content" onClick={this.itemEvent}>
                    <div className="row">
                        <h3>
                            <span className="position">Front-end developer</span><br/>
                            <span className="category">Web-development</span>
                        </h3>
                        <span className="city">Varosh, Ukraine</span>
                        <span className="date">one million years ago</span>
                    </div>
                    <div className="row">
                        <p className="short-desc">asdf asdlfiwe welirho hslajdf vkdb werbb erwkejksd skdjfew wekr msdf...</p>
                    </div>
                </div>
            );
        return content;
    }

    render() {
        console.log(this.state.active);
        return this.itemRender()
    }
}