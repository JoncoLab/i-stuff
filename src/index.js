import './index.css'
import registerServiceWorker from './registerServiceWorker'
import "materialize-css/dist/css/materialize.css"
import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import App from "./App"
import firebase from "firebase"
import Rebase from "re-base"
import "firebase/firestore"
import * as $ from "jquery"
import * as M from "materialize-css"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Landing} from "./landing"

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

const AppRender = () => (
    <App base={base}/>
);

class AppDeploy extends React.Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/vacancies" component={AppRender}/>
                    <Route exact path="/" component={Landing}/>
                </Switch>
            </Fragment>
        )
    }
}

 ReactDOM.render(
     <BrowserRouter>
         <AppDeploy/>
     </BrowserRouter>,
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