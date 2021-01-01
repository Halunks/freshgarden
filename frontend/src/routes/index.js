import React, {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Checkout from '../pages/Checkout'
import About from '../pages/About';
import Addproduct from '../pages/Addproduct.jsx'
import AuthComponent from "../HOC/AuthComponent";
import Profile from "../pages/Profile";
import {Login} from "../pages/Login";
import Slides from "../pages/Slides";


export const Routes = () => {
    return <Fragment>
                <Router >
                    <Switch>
                        <Route path="/slides" component={Slides} exact />
                        <Route path="/user/profile" component={AuthComponent(Profile)} exact />
                        <Route path="/user/login" component={Login} exact />
                        <Route path='/checkout' component={AuthComponent(Checkout)} exact />
                        <Route path='/about' component={About} exact />
                        <Route path='/upload' component={AuthComponent(Addproduct)} exact />
                        <Route path='/shop' component={Homepage} exact />
                        <Route path='/*' component={Homepage} exact />
                    </Switch>
                </Router>
            </Fragment>
}
