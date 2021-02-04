import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom';
// pages
import Home from '../pages/Home';
import Projects from '../pages/Projects';
// state
import {useSelector, useDispatch} from 'react-redux';
import { updateActiveNav } from '../redux/actions/index';

const Navbar = () => {
    const activePage = useSelector((state)=> state.activeNav);
    const dispatch = useDispatch();

    return(
        <Router>
            <div className="navbar-container">
                <nav className="container">
                    <Link 
                    to="/" 
                    className={`${activePage === 'home' ? 'active' : ''}`}
                    onClick={()=>dispatch(updateActiveNav('HOME'))}
                    >
                        Eddie
                    </Link>

                    <Link 
                    to="/projects"
                    className={`${activePage === 'projects' ? 'active' : ''}`}
                    onClick={()=>dispatch(updateActiveNav('PROJECTS'))}
                    >
                        Projects
                    </Link>
                </nav>
            </div>
            <Switch>
                <Route exact path="/home" render={Home}/>
                <Redirect exact path="/" to="/home"/>
                <Route exact path="/projects" render={Projects}/>
            </Switch>
        </Router>
    )
}

export default Navbar;


