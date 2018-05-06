import React from "react"
import './App.css';
import {SideBar} from "./sideBar"
import {Content} from "./content/content"

class App extends React.Component {
    render() {
        return (
            <div className="App grey lighten-3">
                <SideBar/>
                <Content/>
            </div>
        )
    }
}

export default App;