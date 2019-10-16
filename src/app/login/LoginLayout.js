import React, {Component} from 'react';
import './LoginLayout.scss'

import desktop from "../../assets/images/desktop.png";
import auth_img from "../../assets/images/auth_img.png";

export default class LoginLayout extends Component{ 
    render() {
        return (
            <div className="LoginLayout">
                <div className="auth">
                    <div className="auth--top__block">
                        <img className="auth-background" src={desktop} alt="background" />
                        <img className="auth-img" src={auth_img} alt="background-auth"/>

                    </div>
                </div>


            </div>
        );
    }
}