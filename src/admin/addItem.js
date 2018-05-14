import React, {Fragment} from "react"

export class AddItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <a className="btn col s12 m5 btn-large green lighten-1 modal-trigger" href="#modal1" style={{width: "100%"}}>Add position</a>
                <div id="modal1" className="container modal">
                    <form className="row modal-content">
                        <label htmlFor="add-name">Enter position name</label>
                        <input type="text" id="add-name" placeholder="Front-end Developer" required={true}/>
                        <label htmlFor="add-category">Enter category</label>
                        <input type="text" id="add-category" placeholder="IT/Web-development" required={true}/>
                        <label htmlFor="add-location">Enter location</label>
                        <input type="text" id="add-location" placeholder="Uzhgorod, Ukraine" required={true}/>
                        <textarea id="add-description" placeholder="Enter description" required={true}/>
                        <label htmlFor="list-caption">Enter caption of your list</label>
                        <input id="list-caption" placeholder="Requirements:"/>
                        <div className="chips">
                            <input id="list-data" placeholder="3+ years of front-end experience"/>
                        </div>
                        <button className="btn col s12 m5 btn-large green lighten-1" type="submit">Add position</button>
                        <button className="btn col s12 m5 push-m2 btn-large red lighten-1" type="reset" id="reset">Reset</button>
                    </form>
                </div>
            </div>
        )
    }
}