import React, {Component} from 'react';

import './Home.scss';

import stethoscope from '../../../assets/images/stethoscope.png';
import heart from '../../../assets/images/heart.png';
import hospital from '../../../assets/images/hospital-buildings.png';
import search from '../../../assets/images/search.png';
import medical from '../../../assets/images/medical.png';
import heartbeat from '../../../assets/images/heartbeat.png';
import network from '../../../assets/images/network.png';
import comments from '../../../assets/images/comments.png';


export default class Home extends Component {
    render(){
        return (
            <div className="Home">
                <section className="home--header">
                    <div className="home--header__content">
                        <h1 className="home--header__title">Бесплатный сервис по поиску врачей в Алматы</h1>

                        <form className="home--header__form">
                            <div className="input-btn">
                                <input type="text" placeholder="Поиск..."/>
                                <button className="btn"><img className="search-icon" src={search} alt="search"/> Поиск</button>
                            </div>
                        </form>

                        <div className="home--header__content-info">
                            <div className="home--header__content-info_row">
                                <img className="home--header__content-icon" src={stethoscope} alt="stethoscope"/>
                                <b>13 974</b>
                                Врачей работают с нами
                            </div>

                            <div className="home--header__content-info_row">
                                <img className="home--header__content-icon" src={hospital} alt="hospital"/>
                                <b>5240</b>
                                Клиник работают с нами
                            </div>

                            <div className="home--header__content-info_row">
                                <img className="home--header__content-icon" src={heart} alt="heart"/>
                                <b>11 168</b>
                                Реальных отзывов
                            </div>

                            <div className="home--header__content-info_footer">
                                Найти проверенного врача - Легко!
                            </div>

                        </div>

                    </div>
                </section>

                <section className="home--cards">
                    <div className="container">
                        <div className="wrapper">
                            <div className="home--cards__item">
                                <div className="text-center">
                                    <img src={network} alt="network"/>
                                    <span>Рейтинг врачей</span>
                                </div>
                            </div>

                            <div className="home--cards__item">
                                <div className="text-center">
                                    <img src={medical} alt="medical"/>
                                    <span>Более 150 спецализаций</span>
                                </div>
                            </div>


                            <div className="home--cards__item">
                                <div className="text-center">
                                    <img src={comments} alt="network"/>
                                    <span>Актуальные отзывы о врачах</span>
                                </div>
                            </div>


                            <div className="home--cards__item">
                                <div className="text-center">
                                    <img src={heartbeat} alt="network"/>
                                    <span>Онлайн-консультация врачей</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div> 
        );
    }
}