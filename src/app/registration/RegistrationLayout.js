import React, {Component} from 'react';
import './RegistrationLayout.scss'
import './../login/LoginLayout.scss';

import { connect } from "react-redux";
import { authorize } from "../../store/actions/auth.actions";

import desktop from "../../assets/images/desktop.png";
import auth_img from "../../assets/images/auth_img.png";

class RegistrationLayout extends Component{
    state = {
        name: null,
        phone: null,
        password: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {authorize: name,phone, password} = this.state;
        this.props.authorize(name,phone, password);


        this.props.history.push("/");
    }
    componentDidUpdate() {
        console.log(this.state);
        console.log('component updated')
    }

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
                                <input type="text" id="name"onChange={this.handleChange} className="form--input-name" />
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
                                <input type="text" id="phone" onChange={this.handleChange}className="form--input" />
                            </div>
                        </div>
                        <div className="form--item">
                            <label>Придумайте пароль:</label>
                            <div className="vue-tel-input">
                                <input type="password" id="password"onChange={this.handleChange} className="form--input--pass" />
                            </div>
                        </div>
                        <div className="form--item">
                            <div className="vue-tel-input">
                                <button className="button btn-login" onClick={this.handleSubmit}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
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


export default connect(
    null,
    { authorize }
  )(RegistrationLayout);