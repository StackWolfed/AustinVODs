import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavThing from './components/navbar';
import Results from './components/results';
import Events from './components/events';
import Pr from './components/pr';
import DubsMain from './components/dubsHome';
import ResultsDubs from './components/resultsDubs';
import EventsDubs from './components/eventsDubs'

ReactDOM.render(
    <div style={{backgroundColor: "#333333"}}>
        <NavThing />
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/results/:name" component={Results} />
                <Route path="/event/:evName" component={Events} />
                <Route path="/pr" component={Pr} />
                <Route path="/dubs" component={DubsMain} />
                <Route path="/resultsDubs/:name" component={ResultsDubs} />
                <Route path="/eventDubs/:evName" component={EventsDubs} />
            </Switch>
        </HashRouter>
        <div className="footer">Maintened by: Gale, made by <a href="https://github.com/StackWolfed">StackWolfed</a></div>
    </div>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
