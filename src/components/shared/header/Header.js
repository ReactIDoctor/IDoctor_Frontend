import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

export default function Header(){
    return(
        <div className="Header">
          <div className="header-contain">
            <div className="header-contain__1">
              <div className="logo">
                <img src="https://idoctor.kz/icons/logo_white.svg"/>
              </div>
              <div className="select-city">
                <img className="select-city__icon" src="../../../../Images/map-logo.png"/>
                <select className="select-city__cities">
                  <option>Almaty</option>
                  <option>Nur-Sultan</option>
                  <option>Shymkent</option>
                  <option>Aktau</option>
                </select>
              </div>
            </div>

            <div className="header-contain__2">
                <div className="main-links">ВРАЧИ</div>
                <div className="main-links">МЕДЦЕНТРЫ </div>
                <div className="main-links">СТАТЬИ</div>
                <div className="main-links">РЕГИСТРАЦИЯ</div>
                <button className="button"> ВОЙТИ</button>
            </div>

          </div>

        </div>
    );
}