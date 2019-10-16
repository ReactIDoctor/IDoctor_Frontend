import React from 'react';
import './Header.scss';
import {NavLink} from 'react-router-dom';

import logo from "../../../assets/images/logo.svg";
import location from "../../../assets/images/map-logo.png";

export default function Header(){
    return(
        <div className="Header">
          <div className="header-contain">
            <div className="header-contain__1">
              <NavLink className="logo" to="/">
                <img src={logo} alt="logo"/>
              </NavLink>
              <div className="select-city">
                <img className="select-city__icon" src={location} alt="location"/>
                <select className="select-city__cities">
                  <option>АЛМАТЫ</option>
                  <option>НУР-СУЛТАН</option>
                  <option>ШЫМКЕНТ</option>
                  <option>АКТАУ</option>
                </select>
              </div>
            </div>

            <div className="header-contain__2">
                <NavLink className="Header__link"  to="/">
                  <p className="main-link">ВРАЧИ</p>
                </NavLink>
                <NavLink className="Header__link" to="/">
                  <p className="main-link">МЕДЦЕНТРЫ</p>
                </NavLink>
                <NavLink className="Header__link"  to="/">
                  <p className="main-link">СТАТЬИ</p>
                </NavLink>
                <NavLink className="Header__link" to="/">
                  <p className="main-link">РЕГИСТРАЦИЯ</p>
                </NavLink>
                <NavLink className="Header__link" to="/">
                  <button className="login">ВОЙТИ</button>
                </NavLink>
            </div>
          </div>

        </div>
    );
}