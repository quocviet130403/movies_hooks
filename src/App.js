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
import News from './pages/News/News';
import About from './pages/About/About';

export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/news" Component={News} />
        <HomeTemplate exact path="/about" Component={About} />
      </Switch>
    </Router>
  );
}

export default App;
