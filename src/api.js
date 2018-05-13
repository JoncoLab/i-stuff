import React, {Fragment} from "react"
import {SideBar} from "./sideBar"
import {Content} from "./content/content"

export class Api extends React.Component {
    render() {
        return (
            <Fragment>
                <SideBar changeFilters={this.changeFilters} categories={this.state.categories} locations={this.state.locations}/>
                <Content items={this.state.positions}/>
            </Fragment>
        )
    }
}