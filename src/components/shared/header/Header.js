import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header(){
    return(
        <div className="Header">
            <NavLink to = "/">
                Home
            </NavLink>

            <NavLink to = "/auth">
                Login
            </NavLink>
        </div>
    );
}