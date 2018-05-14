import React from "react"
import '../App.css';
import * as M from "materialize-css"
import {AdminHeader} from "./adminHeader"
import {AdminContent} from "./adminContent"

export class Admin extends React.Component {
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

        this.changeFilters = this.changeFilters.bind(this);
        this.bindPositions = this.bindPositions.bind(this);
    }
    componentDidMount() {
        this.bindPositions();
        console.log(this.state.positions)
    }
    changeFilters(filters) {
        this.setState({
            filters: filters
        });
        this.bindPositions();
    }
    bindPositions() {
        this.props.base.bindToState('positions', {
            context: this,
            state: 'positions',
            asArray: true,
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
                Admin.Error("Database connection failure!" + "<br>" + err)
            }
        });
    }
    render() {
        return (
            <div className="App grey lighten-3">
                <AdminHeader/>
                <AdminContent items={this.state.positions}/>
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