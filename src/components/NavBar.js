import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul className="nav">
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink to="/battle">Battle</NavLink></li>
            <li><NavLink to="/popular">Popular</NavLink></li>
        </ul>
    )
}

export default NavBar; 