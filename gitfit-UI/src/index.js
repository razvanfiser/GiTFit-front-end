import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserHistory } from "history";
import { Router, Route, Switch} from "react-router";
import Navbar from './components/Navbar/navbar.js';

//import components
import AboutUsPage from "./views/AboutUsPage/AboutUsPage.js";
import SignUpPage from './views/SignUpPage/SignUpPage.js';
import ClientsPage from './views/ClientsPage/ClientsPage.js';
import ClientPage from './views/ClientsPage/ClientPage.js';



var hist = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about" component={AboutUsPage} />
      <Route path="/sign-up" component={SignUpPage}/>
      <Route path='/clients' component={ClientsPage}/>
      <Route path='/client' component={ClientPage}/>
      <Route path="/" component={AboutUsPage} />
    </Switch>
  </Router>,
);