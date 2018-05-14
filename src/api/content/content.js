import React from "react"
import {Item} from "./Item"
import PropTypes from "prop-types"
import App from "../../App";

export class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {

    }
    render() {
        return (
            <div className="section content">
                {
                    this.props.items.map((item, i) => (
                        <Item
                            key={i}
                            id={item.key}
                            name={item.name}
                            category={item.category}
                            location={item.location}
                            date={item.date}
                            description={item.description}
                            responsibilities={item.responsibilities}
                            requirements={item.requirements}
                            niceToHave={item.niceToHave}
                        />
                    ))
                }
            </div>
        )
    }
}

Content.propTypes = {
    items: PropTypes.array.isRequired
};