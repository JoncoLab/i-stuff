import React, {Fragment} from "react"
import * as M from "materialize-css"
import * as $ from "jquery"

export class AddItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: []
        }

        this.setCustomFields = this.setCustomFields.bind(this);
        this.handleCustomFieldId = this.handleCustomFieldId.bind(this);
        this.appendField = this.appendField.bind(this);
    }
    setCustomFields(fields) {
        this.setState({
            fields: fields
        });
    }
    handleCustomFieldId() {
        let fields = this.state.fields;
        let idS = [];
        let targetId = 1;
        for (let field of fields) {
            idS.push(field.id);
        }
        while (idS.includes(targetId)) {
            targetId++;
        }
        return targetId;
    }
    appendField() {
        let targetFields = this.state.fields,
            newField = {
            id: targetFields.length ?
                this.handleCustomFieldId() : 1
            };

        targetFields.push(newField);

        this.setCustomFields(targetFields);
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
                        <textarea id="add-description" placeholder="Enter description" required={true} style={{resize: "none"}}/>
                        <label htmlFor="list-caption">Enter caption of your list</label>
                        <input id="list-caption" placeholder="Requirements:"/>
                        <div className="chips">
                            <input id="list-data" placeholder="3+ years of front-end experience"/>
                        </div>
                        {
                            this.state.fields.map((field) => (
                                <input key={field.id.toString()} id={"input-" + field.id.toString()} placeholder={"Enter your value"}/>
                            ))
                        }
                        <button className="btn col s12 btn-large red lighten-1" type="button" onClick={this.appendField}>Add Field</button>
                        <button className="btn col s12 m5 btn-large green lighten-1" type="submit">Submit</button>
                        <button className="btn col s12 m5 push-m2 btn-large red lighten-1" type="reset" id="reset">Reset</button>
                    </form>
                </div>
            </div>
        )
    }
}