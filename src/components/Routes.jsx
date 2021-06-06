import '../styles/styles.scss';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Public from "./Pages/Public";
import Private from "./Pages/Private";

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Public} />
            <Route exact path="/private" component={Private} />
        </Switch>
    </Router>
)

export default Routes