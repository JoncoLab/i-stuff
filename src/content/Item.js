import React from "react"

export class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemActive: false,
            hideItems: "block",
            popOutActive: false,
            vacancyData: {
                name: this.props.name,
                category: this.props.category,
                location: this.props.location,
                date: this.props.date,
                description: this.props.description
            }
        };

        this.itemEvent = this.itemEvent.bind(this);
        this.popOurEvent = this.popOurEvent.bind(this);
        this.itemRender = this.itemRender.bind(this);
    }
    itemEvent() {
        this.setState({
            itemActive: !this.state.itemActive
        });
    }
    popOurEvent() {
        this.setState({
            popOutActive: !this.state.popOutActive
        });
    }
    itemRender() {
        let content;
        if(this.state.itemActive === true) {
            content = (
                <div className="item grey lighten-5 z-depth-2">
                    <div className="row">
                        <div className="description col s12 m9">
                            <div className="row">
                                <span className="item-caption flow-text grey-text text-darken-4 left-align col s8">{this.state.vacancyData.name}</span>
                                <div className="item-share col s2"><span className="flow-text grey-text text-darken-2">Share</span></div>
                            </div>
                            <div className="title">
                                <span className="flow-text grey-text text-darken-3">Category: {this.state.vacancyData.category}</span><br/>
                                <span className="flow-text grey-text text-darken-3">Location: {this.state.vacancyData.location}</span>
                            </div>
                            <p className="item-description flow-text grey-text text-darken-3 left-align">{this.state.vacancyData.description}</p>
                            <div className="responsibilities">
                                <h4 className="flow-text grey-text text-darken-3 left-align">Responsibilities:</h4>
                                <ul className="flow-text grey-text text-darken-3">
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
                        <div className="col s12 m3 apply">
                            <div className="row">
                                <span className="flow-text grey-text text-darken-1 col s12 left-align" id="apply-date">16 hours ago</span>
                                <span className="flow-text grey-text text-darken-3 col s12" id="apply-caption">Front-end developer</span>
                                <span className="flow-text grey-text text-darken-2 col s12 sup-caption" id="apply-category">IT/ Web-development</span>
                                <span className="flow-text grey-text text-darken-1 col s12 left-align" id="apply-location">Varosh, Ukraine</span>
                            </div>
                            <button className="btn col s12 btn-large green lighten-1" onClick={this.popOurEvent}>Apply</button>
                            <div className={this.state.popOutActive ? "popout-enabled row" : "popout-disabled"}>
                                <form className="popout-content" encType="multipart/form-data" method="POST">
                                    <h3 className="col s12 flow-text grey darken-4 white-text center-align">Send Us e-mail and we'll contact You</h3>
                                    <input type="email" name="email" id="email" placeholder="E-mail" required={true}/>
                                    <input name="first-name" id="first-name" placeholder="First name" required={true}/>
                                    <input name="last-name" id="last-name" placeholder="Last name" required={true}/>
                                    <input type="tel" name="tel" id="tel" placeholder="Mobile number (optional)" required={false}/>
                                    <label htmlFor="cv">Attach your CV file</label>
                                    <input type="file" name="cv" id="cv"/>
                                    <button className="grey lighten-2 grey-text text-darken-4 cancel" type="button" onClick={this.popOurEvent}>Close</button>
                                    <button className="white-text green lighten-1" type="submit" id="submit">Send</button>
                                </form>
                            </div>
                            <button className="valign-wrapper back-link flow-text grey-text text-darken-3" onClick={this.itemEvent}><i className="material-icons">arrow_back</i> Back to all vacancies</button>
                        </div>
                    </div>
                </div>
            );
        } else if(this.state.itemActive === false) {
            content = (
                <div  className="item-preview content grey lighten-5 z-depth-2" onClick={this.itemEvent} style={{display: this.state.hideItems}}>
                    <div className="row">
                        <span className="item-preview-caption flow-text grey-text text-darken-4 col s12 m6">{this.state.vacancyData.name}</span>
                        <span className="item-preview-location flow-text grey-text text-darken-1 col s6 m3 center-align">{this.state.vacancyData.location}</span>
                        <span className="item-preview-date flow-text grey-text text-darken-1 col s6 m3 center-align">{this.state.vacancyData.date}</span>
                        <span className="item-preview-category flow-text grey-text text-darken-2 col s12 sup-caption">{this.state.vacancyData.category}</span>
                    </div>
                    <div className="row">
                        <p className="item-preview-description flow-text grey-text text-darken-3 left-align col s12">{this.state.vacancyData.description}</p>
                    </div>
                </div>
            );
        }
        return content;
    }

    render() {
        console.log(this.state.vacancyData.name)
        console.log(this.state.vacancyData.category)
        console.log(this.state.vacancyData.location)
        console.log(this.state.vacancyData.date)
        console.log(this.state.vacancyData.description)
        return this.itemRender()
    }
}