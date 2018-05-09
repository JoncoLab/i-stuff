import './index.css'
import registerServiceWorker from './registerServiceWorker'
import "materialize-css/dist/css/materialize.css"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import firebase from "firebase"
import Rebase from "re-base"
import "firebase/firestore"
import * as $ from "jquery"
import * as M from "materialize-css"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCZznDaMxAe8MzMQlpFXx8SG_iKLOWRGGo",
    authDomain: "i-staff.firebaseapp.com",
    databaseURL: "https://i-staff.firebaseio.com",
    projectId: "i-staff",
    storageBucket: "i-staff.appspot.com",
    messagingSenderId: "141915387124"
});

const _app = app.firestore();
_app.settings({timestampsInSnapshots: true});
const base = Rebase.createClass(_app);

 ReactDOM.render(
     <App base={base}/>,
     document.getElementById("root"),
     () => {
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
     }
 );

registerServiceWorker();