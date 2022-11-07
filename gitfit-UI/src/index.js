import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserHistory } from "history";
import { Router, Route, Switch} from "react-router";

//import components
import AboutUsPage from "./views/AboutUsPage/AboutUsPage.js";

var hist = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/" component={AboutUsPage} />
      <Route path="/new" component={AboutUsPage} />
    </Switch>
  </Router>,
);