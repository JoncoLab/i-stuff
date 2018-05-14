import './index.css'
import registerServiceWorker from './registerServiceWorker'
import "materialize-css/dist/css/materialize.css"
import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Rebase from "re-base"
import firebase from "firebase"
import * as $ from "jquery"
import * as M from "materialize-css"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Landing} from "./landing/landing"
import {Admin} from "./admin/admin"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCZznDaMxAe8MzMQlpFXx8SG_iKLOWRGGo",
    authDomain: "i-staff.firebaseapp.com",
    databaseURL: "https://i-staff.firebaseio.com",
    projectId: "i-staff",
    storageBucket: "i-staff.appspot.com",
    messagingSenderId: "141915387124"
});

const base = Rebase.createClass(app.database());

const MInit = () => {
    M.Sidenav.init($(".sidenav"));
    M.Modal.init($(".modal"));
    M.Parallax.init($(".parallax"));
    M.Carousel.init($(".carousel"), {
        fullWidth: false,
        padding: 100,
        dist: -20,
        numVisible: 5,
        noWrap: false
    })
};

const AppRender = () => (
    <App base={base}/>
);
const AdminRender = () => (
    <Admin/>
);

class AppDeploy extends React.Component {
    constructor(props) {
        super(props);
        this.MInit = MInit;
    }
    componentDidUpdate() {
        this.MInit();
    }
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/vacancies" component={AppRender}/>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/admin" component={AdminRender}/>
                </Switch>
            </Fragment>
        )
    }
}

 ReactDOM.render(
     <BrowserRouter>
         <AppDeploy/>
     </BrowserRouter>,
     document.getElementById("root")
 );

registerServiceWorker();