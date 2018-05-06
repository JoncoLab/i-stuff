import './index.css'
import registerServiceWorker from './registerServiceWorker'
import "materialize-css/dist/css/materialize.css"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

 ReactDOM.render(
     <App/>,
     document.getElementById("root")
 );

registerServiceWorker();