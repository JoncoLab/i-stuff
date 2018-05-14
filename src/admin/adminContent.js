import React, {Fragment} from "react"
import {AdminItem} from "../admin/adminItem"
import {AddItem} from "./addItem"

export class AdminContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="section content">
                <AddItem/>
                {
                    this.props.items.map((item, i) => (
                        <AdminItem
                            key={i}
                            id={item.id}
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