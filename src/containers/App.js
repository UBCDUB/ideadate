import React from 'react';
import './App.css';
import "circular-std"

// for dev purposes only (delete later)
import hackerBacker from '../pages/hackerBacker';
import template from '../pages/template';
import hacker from '../pages/hacker';
import backer from '../pages/backer';
import newProj from '../pages/newProj';
import collab from '../pages/collab';
import collabReq from '../pages/collabReq';
import ideaPitched from '../pages/ideaPitched';
import textInput from '../pages/text-input';
import editorOption from '../pages/editorOption';
import projectView from '../pages/projectView';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";



function App() {
  return (
    <div>
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
                  <Link to='/text-input'>Text input exp</Link>
                </li>
                <li>
                  <Link to='/editorOption'>Text input 2</Link>
                </li>
                <li>
                  <Link to='/projectView'>projectView</Link>
                </li>
                <li>
                  <Link to='/collabReq'>collabReq</Link>
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
              <Route path='/ideaPitched' component={ideaPitched}>
              </Route>
              <Route path='/collabReq' component={collabReq}>
              </Route>
              <Route path='/editorOption' component={editorOption}></Route>
              <Route path='/text-input' component={textInput}></Route>
              <Route path='/projectView' component={projectView}></Route>
            </Switch>
          </div>
        </Router>
      </b>
    </div>
  );
}

export default App;
