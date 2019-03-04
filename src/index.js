import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Create from './components/create/create';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


const router = ()=>{

    return(
        <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route  path="/create" component={Create} />

        </Switch>
    </Router>
    );
}


ReactDOM.render(router(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
