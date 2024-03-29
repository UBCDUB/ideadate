import React from 'react';
import './App.css';
import "circular-std"

import NavMain from './nav.js'
// import appStyles from './app.module.scss'

// for dev purposes only (delete later)
// import hackerBacker from '../pages/hackerBacker';
// import template from '../pages/template';
// import hacker from '../pages/hacker';
// import backer from '../pages/backer';
// import collab from '../pages/collab';
// import collabReq from '../pages/collabReq';
// import ideaPitched from '../pages/ideaPitched';
// import projectView from '../pages/projectView';
// import { userCreate, projCreate, noteCreate } from '../pages/editorOption';
// import { 
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link } from "react-router-dom";



function App() {
  return (
    <NavMain />
    // <div>
    //   <h1>
    //     This is home.
    //   </h1>
    //   <b>
    //     Here's some links to different pages:
    //     <Router>
    //       <div>
    //         <nav>
    //           <ul>
    //             <li><Link to='/hackerBacker'>hackerBacker</Link></li>
    //             <li><Link to='/template'>template page</Link></li>
    //             <li><Link to='/projectView'>projectView</Link></li>
    //             <li><Link to='/collabReq'>collabReq</Link></li>
    //             <li><Link to='/projCreate'>Create a Project</Link></li>
    //             <li><Link to='/userCreate'>Create a User</Link></li>
    //             <li><Link to="/noteCreate">Send a Note (after 'liking' proj)</Link></li>
    //             <li><Link to="/collab">Collab</Link></li>
    //             <li><Link to="/hacker">Hacker</Link></li>
    //             <li><Link to="/backer">Backer</Link></li>
    //             <li><Link to="/">Home</Link></li>
    //           </ul>
    //         </nav>
    //         <Switch>
    //           <Route path='/hackerBacker' component={hackerBacker}></Route>
    //           <Route path='/template' component={template}></Route>
    //           <Route path='/hacker' component={hacker}></Route>
    //           <Route path='/backer' component={backer}> </Route>
    //           <Route path='/projCreate' component={projCreate}></Route>
    //           <Route path='/collab' component={collab} ></Route>
    //           <Route path='/ideaPitched' component={ideaPitched}></Route>
    //           <Route path='/collabReq' component={collabReq}></Route>
    //           <Route path='/projectView' component={projectView}></Route>
    //           <Route path='/userCreate' component={userCreate}></Route>
    //           <Route path='/noteCreate' component={noteCreate}></Route>
    //         </Switch>
    //       </div>
    //     </Router>
    //   </b>
    // </div>
  );
}

export default App;
