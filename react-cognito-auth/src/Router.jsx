import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from './App'
import Protected from './Protected';

const Router = () => {
    return (
        <BrowserRouter className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected</Link>
                    </li>
                </ul>

                <hr />
            </header>

            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/protected">
                    <Protected />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;