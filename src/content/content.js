import React from "react"
import {Item} from "./Item"
import PropTypes from "prop-types"

export class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="section content">
                {
                    this.props.items.map((item, i) => (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            category={item.category}
                            location={item.location}
                            date={item.date.toDate().toDateString()}
                            description={item.description}
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