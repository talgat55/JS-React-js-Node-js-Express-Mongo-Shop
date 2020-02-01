import React from 'react';
import {BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Admin from './layouts/Admin';
import ProductCreate from './pages/admin/ProductCreate/ProductCreate';
import './App.css';
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>

                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/admin/product/create" component={ProductCreate}/>


                <Route exact component={Error}/>
            </Switch>
        </Router>
    );
}

export default App;
