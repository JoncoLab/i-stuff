import './index.css'
import registerServiceWorker from './registerServiceWorker'
import * as $ from "jquery"
import * as M from "materialize-css"
import "materialize-css/dist/css/materialize.css"
import i18n from "i18next"
import languageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-xhr-backend"
import {reactI18nextModule} from "react-i18next"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

$(document).ready(() => {
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

i18n
    .use(Backend)
    .use(languageDetector)
    .use(reactI18nextModule)
    .init({
        callbackLng: 'ru',
        ns: ['translations'],
        defaultNs: 'translations',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: true
        }
    });

 registerServiceWorker();

 ReactDOM.render(
     <App/>,
     document.getElementById("root")
 );