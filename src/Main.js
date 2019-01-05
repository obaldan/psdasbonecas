import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import Home from './pages/home';
import Contact from './pages/contact';
import Assistence from './pages/assistence';
import About from './pages/about';
import './styles.css';


class Main extends Component{
    render() {
        return (
            <HashRouter>
                <div>
                    
                    <div className="menu">
                        <h1 className="menuLogo">Simple List</h1>
                        <div className="menuRight">
                            <ul className="header">
                                <li><NavLink exact to="/" activeClassName="activeNav">Home</NavLink></li>
                                <li><NavLink exact to="/contact" activeClassName="activeNav">Contact</NavLink></li>
                                <li><NavLink exact to="/assistence" activeClassName="activeNav">Assistência técnica</NavLink></li>
                                <li><NavLink exact to="/about" activeClassName="activeNav">Sobre a empresa</NavLink></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/assistence" component={Assistence} />
                        <Route exact path="/about" component={About} />
                    </div>
                </div>
            </HashRouter>
            
        );
    }

};

export default Main;