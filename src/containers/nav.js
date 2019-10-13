import React from 'react';
import { userCreate, projCreate } from '../pages/editorOption';
import {
    BrowserRouter as Router,
    Route,
    Link } from "react-router-dom";
import projectView from '../pages/collab';
import logo from '../design_doc/ideadatelogo.png';
import home from './home.js'

import navStyles from './nav.module.scss'

const NavMain = () => {
    return (
        <Router>
            <header className={navStyles.header}>
                {/* <div> */}
                    <div className={navStyles.container}>
                        <Link>
                        <img className={navStyles.img} src={logo} alt="logo"/>
                        </Link>
                        <Link className={navStyles.navList} to='/projects'>Projects</Link>
                        <Link className={navStyles.navList} to='/createProj'>Create Project</Link>
                        <Link className={navStyles.navList} to='/createUser'>Create User</Link>
                    </div>
                    {/* <Route path='/' component={home}></Route> */}
                    <Route path='/projects' component={projectView}></Route>
                    <Route path='/createProj' component={projCreate}></Route>
                    <Route path='/createUser' component={userCreate}></Route>
                {/* </div> */}
            </header>
        </Router>
    )
}

export default NavMain;