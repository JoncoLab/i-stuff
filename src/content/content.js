import React from "react"
import {Item} from "./Item";

export class Content extends React.Component {
    render() {
        return (
            <div className="section content">
                <Item/>
                <Item/>
                <Item/>
            </div>
        )
    }
}