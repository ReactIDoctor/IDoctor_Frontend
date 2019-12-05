import React, { useState } from 'react';
import './Header.scss';
import {NavLink} from 'react-router-dom';

import logo from "../../../assets/images/logo.svg";

export default function Header(){
    const [auth, setAuth] = useState(false);

    return(
        <div className="Header">
          <div className="header-contain">
            <div className="header-contain__1">
              <NavLink className="logo" to="/">
                <img src={logo} alt="logo"/>
              </NavLink>
            </div>

            <div className="header-contain__2">
                <NavLink className="Header__link"  to="/doctors">
                  <p className="main-link">ВРАЧИ</p>
                </NavLink>
                <NavLink className="Header__link" to="/medcenters">
                  <p className="main-link">МЕДЦЕНТРЫ</p>
                </NavLink>
                <NavLink className="Header__link"  to="/articles">
                  <p className="main-link">СТАТЬИ</p>
                </NavLink>
                <NavLink className="Header__link" to="/register">
                  <p className="main-link">РЕГИСТРАЦИЯ</p>
                </NavLink>
                <NavLink className="Header__link" to="/auth">
                  <button className="login"> {auth ? 'ПРОФИЛЬ' : 'ВОЙТИ'} </button>
                </NavLink>
            </div>
          </div>

        </div>
    );
}