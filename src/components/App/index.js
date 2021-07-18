import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from '../Signup';
import Dashboard from '../Dashboard';
import Login from '../Login';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
