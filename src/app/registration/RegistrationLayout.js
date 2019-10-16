import React, {Component} from 'react';
import './RegistrationLayout.scss'
import './../login/LoginLayout.scss';

import desktop from "../../assets/images/desktop.png";
import auth_img from "../../assets/images/auth_img.png";

export default class RegistrationLayout extends Component{
    render() {
        return (
            <div className="RegistrationLayout">
                <div className="auth">
                    <div className="auth--top__block">
                        <img className="auth-background" src={desktop} alt="background" />
                        <img className="auth-img" src={auth_img} alt="background-auth"/>
                        <div className="auth--title"> Регистрация нового<br/>
                            пользователя</div>
                    </div>
                </div>
                <div className="pages--fix__content">
                    <form className="form--inline-label">
                        <div className="form--item">
                            <label>Ваше имя:</label>
                            <div className="vue-tel-input">
                                <input type="text" className="form--input-name" />
                            </div>
                        </div>
                        <div className="form--item">
                            <label>Ваш телефон:</label>
                            <div className="vue-tel-input">
                                <select className="form-select">
                                    <option>KZ</option>
                                    <option>RUSS</option>
                                    <option>ENG</option>
                                </select>
                                <input type="text" className="form--input" />
                            </div>
                        </div>
                        <div className="form--item">
                            <label>Придумайте пароль:</label>
                            <div className="vue-tel-input">
                                <input type="password" className="form--input--pass" />
                            </div>
                        </div>
                        <div className="form--item">
                            <div className="vue-tel-input">
                                <button className="button btn-login">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                            </div>
                        </div>
                        <div className="form--item to_reg">
                            Уже загеристрированы?
                            <a href="/auth">Авторизуйтесь</a>
                        </div>
                        <div className="footer__copyright-text">
                            <p>
                                iDoctor - сервис по поиску врачей о всему Казахстану. Вызов врача на дом,
                                онлайн-консультация, бесплатная запись на прием
                            </p>
                            <p>
                                ©2013–2019 ТОО “iDoctor.kz”
                            </p>
                        </div>
                    </form>
                </div>

                </div>
        );
    }
}