import React, {Fragment} from "react"
import Header from "./header"
import PropTypes from "prop-types"
import * as $ from "jquery";
import * as M from "materialize-css";

export class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilter = this.handleFilter.bind(this);
    }
    componentDidUpdate() {
        M.FormSelect.init($("select"));
    }
    handleFilter() {
        const filters = {
            catFilter: $("#select-cat").val(),
            locFilter: $("#select-loc").val()
        };
        this.props.changeFilters(filters);
    }
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
                    <li className="input-field">
                        <select id="select-cat" defaultValue="default" onChange={this.handleFilter}>
                            <option value="default">All categories</option>
                            {
                                this.props.categories.map((category, i) => (
                                    <option key={i} value={category}>{category}</option>
                                ))
                            }
                        </select>
                        <label className="valign-wrapper"><i className="material-icons small">folder</i> Choose category</label>
                    </li>
                    <li className="input-field">
                        <select id="select-loc" defaultValue="default" onChange={this.handleFilter}>
                            <option value="default">All locations</option>
                            {
                                this.props.locations.map((location, i) => (
                                    <option key={i} value={location}>{location}</option>
                                ))
                            }
                        </select>
                        <label className="valign-wrapper"><i className="material-icons small">location_on</i> Choose location</label>
                    </li>
                    <li><div className="divider hide-on-med-and-up"> </div></li>
                    <li><a className="subheader hide-on-med-and-up">Back to</a></li>
                    <li className="hide-on-med-and-up"><a className="waves-effect" href="./landing.html">Back to Main</a></li>
                </ul>
            </Fragment>
        )
    }
}

SideBar.propTypes = {
    categories: PropTypes.array.isRequired,
    locations: PropTypes.array.isRequired,
    changeFilters: PropTypes.func.isRequired
};