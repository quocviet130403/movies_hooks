import './App.css';
import { createBrowserHistory } from 'history';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';

export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
        <Switch>
          <HomeTemplate exact path="/" Component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
