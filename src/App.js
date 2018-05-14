import React from "react"
import './App.css';
import {SideBar} from "./api/sideBar"
import {Content} from "./api/content/content"
import * as M from "materialize-css"
import PropTypes from "prop-types"

class App extends React.Component {
    _Bind;
    _Query;
    constructor(props) {
        super(props);

        this.state = {
            positions: [],
            categories: [],
            locations: [],
            filters: {
                catFilter: "default",
                locFilter: "default"
            }
        };

        this._Base = this.props.base;
        this._Query = (filters) => {
            let queries,
                cf = filters.catFilter,
                lf = filters.locFilter;
            if (cf === "default" && lf === "default") {
                queries = {
                    orderByChild: "date"
                }
            } else if (lf === "default") {
                queries = {
                    orderByChild: "category",
                    equalTo: lf
                }
            } else if (cf === "default") {
                queries = {
                    orderByChild: "location",
                    equalTo: lf
                }
            } else {
                // Заміняти _Bind викликом REST API
            }
        };

        this.changeFilters = this.changeFilters.bind(this);
    }
    componentWillMount() {
        this._Bind = this._Base.bindToState('positions', {
            context: this,
            state: 'positions',
            asArray: true,
            queries: this._Query,
            then(positions) {
                let categories = [],
                    locations = [],
                    p = positions;

                for (let i in p) {
                    if (p.hasOwnProperty(i)) {
                        if (p[i].hasOwnProperty("category") && p[i].category.trim() !== "" && !categories.includes(p[i].category)) {
                            categories.push(p[i].category);
                        }
                        if (p[i].hasOwnProperty("location") && p[i].location.trim() !== "" && !locations.includes(p[i].location)) {
                            locations.push(p[i].location);
                        }
                    }
                }

                this.setState({
                    categories: categories,
                    locations: locations
                });
            },
            onFailure(err) {
                App.Error("Database connection failure!" + "<br>" + err)
            }
        });
    }
    componentDidUpdate() {
        console.log(this._Bind)
    }
    changeFilters(filters) {
        this._Base.removeBinding(this._Bind);
        this._Bind = this._Base.bindToState("positions", {
            context: this,
            state: 'positions',
            asArray: true,
            queries: {
                orderByChild: "category",
                equalTo: "test"
            },
            then(positions) {
                let categories = [],
                    locations = [],
                    p = positions;

                for (let i in p) {
                    if (p.hasOwnProperty(i)) {
                        if (p[i].hasOwnProperty("category") && p[i].category.trim() !== "" && !categories.includes(p[i].category)) {
                            categories.push(p[i].category);
                        }
                        if (p[i].hasOwnProperty("location") && p[i].location.trim() !== "" && !locations.includes(p[i].location)) {
                            locations.push(p[i].location);
                        }
                    }
                }

                this.setState({
                    categories: categories,
                    locations: locations
                });
            },
            onFailure(err) {
                App.Error("Database connection failure!" + "<br>" + err)
            }
        });
        this.setState({
            filters: filters
        });
    }
    render() {
        return (
            <div className="App grey lighten-3">
                <SideBar changeFilters={this.changeFilters} categories={this.state.categories} locations={this.state.locations}/>
                <Content items={this.state.positions}/>
            </div>
        )
    }
    static Error(msg) {
        M.toast({
            html: "<p>Error occurred:<br>" + msg + "</p>",
            activationPercent: .5,
            classes: "red darken-3",
            displayLength: 10000,
            completeCallback: () => {
                window.location.reload(true)
            }
        })
    }
}

export default App

App.propTypes = {
    base: PropTypes.object.isRequired
};