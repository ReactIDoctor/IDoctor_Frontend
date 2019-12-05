import React, {Component} from 'react';
import './LoginLayout.scss'


import { connect } from "react-redux";
import { login } from "../../store/actions/auth.actions";

import desktop from "../../assets/images/desktop.png";
import auth_img from "../../assets/images/auth_img.png";

class LoginLayout extends Component{
    state = {
        phone: "",
        password: "",
        users: [
            {
                phone: "87473651824",
                password: "pass1"
            },
            {
                phone: "87474698942",
                password: "pass2"
            }
        ]

    }

    onInputChange = (event, name) => {
        const newValue = {};
        newValue[name] = event.target.value;
        this.setState({...newValue})
    }
    onSubmit = event =>{
        event.preventDefault();
        const { phone, password} = this.state;
        for(let i=0; i<this.state.users.length; i++){
            if(this.state.users[i].phone === phone && this.state.users[i].password === password){
                localStorage.setItem("token", "132456789");
                this.props.history.push("/");
            }
        }
    }

    render() {
        return (
            <div className="LoginLayout">
                <div className="auth">
                    <div className="auth--top__block">
                        <img className="auth-background" src={desktop} alt="background" />
                        <img className="auth-img" src={auth_img} alt="background-auth"/>
                        <div className="auth--title"> Авторизация<br/>
                            iDoctor.kz</div>
                    </div>
                </div>
                <div className="pages--fix__content">

                    <form className="form--inline-label">
                        <div className="form--item">
                            <label>Ваш телефон:</label>
                            <div className="vue-tel-input">
                                <select className="form-select">
                                    <option>KZ</option>
                                    <option>RUSS</option>
                                    <option>ENG</option>
                                </select>
                                <input type="text" onChange={event => this.onInputChange(event, "phone")} className="form--input" />
                            </div>
                        </div>
                        <div className="form--item">
                            <label>Ваш пароль:</label>
                            <div className="vue-tel-input">
                                <input type="password" onChange={event => this.onInputChange(event, "password")} className="form--input--pass" />
                            </div>
                        </div>
                        <div className="form--item">
                            <div className="vue-tel-input">
                                <button type="submit" onClick={this.onSubmit} className="button btn-login">Войти</button>

                            </div>
                        </div>
                        <div className="form--item">
                            <div className="vue-tel-input">
                                <button className="button btn-forget">не понмю пароль</button>
                            </div>
                        </div>
                        <div className="form--item to_reg">
                            Не загеристрированы?
                            <a href="/register">Регистрация</a>
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
    { login }
  )(LoginLayout);
  
  
