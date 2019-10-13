import React from 'react';
import logo from './logo.svg';
import './App.css';
import "circular-std"
import Layout from '../components/Layout/Layout';

// for dev purposes only (delete later)
import hackerBacker from '../pages/hackerBacker';
import template from '../pages/template';
import hacker from '../pages/hacker';
import backer from '../pages/backer';
import newProj from '../pages/newProj';
import collab from '../pages/collab';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";


function App() {
  return (
    <Layout>
      <h1>
        This is home.
      </h1>
      <b>
        Here's some links to different pages:
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/hackerBacker'>hackerBacker</Link>
                </li>
                <li>
                  <Link to='/template'>template page</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path='/hackerBacker' component={hackerBacker}>
              </Route>
              <Route path='/template' component={template}>
              </Route>
              <Route path='/hacker' component={hacker}>
              </Route>
              <Route path='/backer' component={backer}>
              </Route>
              <Route path='/newProj' component={newProj}>
              </Route>
              <Route path='/collab' component={collab}>
              </Route>
            </Switch>
          </div>
        </Router>
      </b>
    </Layout>
  );
}

export default App;