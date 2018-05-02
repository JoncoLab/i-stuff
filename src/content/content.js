import React from "react"
import {Item} from "./Item";

export class Content extends React.Component {
    render() {
        return (
            <div className="container section">
                <Item/>
                <Item/>
                <Item/>
            </div>
        )
    }
}