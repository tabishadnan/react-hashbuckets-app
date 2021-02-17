import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Photos from '../pages/Photos';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';

const AppRouters = () => {
    return (
        <Router>
            <div> 
                <Header />
                <div className="content">
                <Switch>
                    <Route exact path={["/", "/react-hashbuckets-app"]} component={Photos} />
                    <Route exact path="/cart" component={Cart} />
                    <Route component={NotFound} />
                </Switch>
                </div>
            </div>
        </Router>
    );
}

export default AppRouters;