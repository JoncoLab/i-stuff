import './index.css'
import registerServiceWorker from './registerServiceWorker'
import * as $ from "jquery"
import * as M from "materialize-css"
import "materialize-css/dist/css/materialize.css"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

$(document).ready(() => {
    M.Modal.init($(".modal"));
    M.Parallax.init($(".parallax"));
    M.Sidenav.init($(".sidenav"));
    M.Carousel.init($(".carousel"), {
        fullWidth: false,
        padding: 100,
        dist: -20,
        numVisible: 5,
        noWrap: false
    });
});

 registerServiceWorker();

 ReactDOM.render(
     <App/>,
     document.getElementById("root")
 );