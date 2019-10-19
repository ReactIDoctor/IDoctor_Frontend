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

                <section className="home--skills">
                    <div className="home--title">
                        Быть здоровым - просто!
                    </div>

                    <div className="home--subtitle">
                        Мы поможем найти проверенного врача и записаться на прием в удобное для Вас время
                    </div>

                    <div className="home--skills__content">
                        <div className="container">
                            <div className="wrapper">
                                <div className="home--skills__content-column slide">
                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/nevrolog_140x140.png"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Невролог</a>
                                            
                                        </div>
                                    </div>

                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/nevrolog_140x140.png"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Невролог</a>
                                            
                                        </div>
                                    </div>

                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/dermatolog_140x140.png"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Дерматолог</a>
                                            
                                        </div>
                                    </div>

                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/gastroenterolog_140x140.png"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Гастроэнтеролог</a>
                                            
                                        </div>
                                    </div>
                                    
                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/urolog_140x140.png"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Уролог</a>
                                            
                                        </div>
                                    </div>

                                   
                                </div>
                                
                                <div className="home--skills__content-column slide">
                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/lor-otorinolaringolog_140x140.png"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> ЛОР (Оториноларинолог)</a>
                                            
                                        </div>
                                    </div>

                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/nevrolog_140x140.png"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Терапевт</a>
                                            
                                        </div>
                                    </div>

                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/optimized/pulmonolog_140x140-q-85.jpg"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Пульмонолог</a>
                                            
                                        </div>
                                    </div>

                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/optimized/ortoped_140x140-q-85.jpg"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Ортопед</a>
                                            
                                        </div>
                                    </div>
                                    

                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/oftalmolog-okulist_140x140.png"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Офтальмолог (окулист)</a>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="home--skills__content-column slide">
                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/osteopat_140x140.png"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Остеопат</a>
                                            
                                        </div>
                                    </div>

                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/proktolog_140x140.png"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Проктолог</a>
                                            
                                        </div>
                                    </div>

                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/gematolog_140x140.png"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Гематолог</a>
                                            
                                        </div>
                                    </div>

                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/optimized/trikholog_140x140-q-85.jpg"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Трихолог</a>
                                            
                                        </div>
                                    </div>
                                    
                                    <div className="home--skills__content-column__item">
                                        <a href="https://idoctor.kz/almaty/doctors/nevrolog">
                                            <img className="circled" alt="Невролог" src="https://idoctor.kz/img/skills/optimized/endokrinolog_140x140-q-85.jpg"/>
                                        </a>
                                        <div className="home--skills__content-column__item-info">
                                            <a href="/"> Эндокринолог</a>
                                            
                                        </div>
                                    </div>

                                
                                </div>

                                
                            </div>
                        </div>

                    </div>
                    
                </section>                

                <section className="home--partnership">
                    <div className="home--partnership__info">
                        <h2 className="home--partnership__info-title">
                            Хотите разместить анкету врача или клиники на сайте?
                        </h2>

                        <div className="home--partnership__info-steps">
                            <div className="step">
                                <img src="https://idoctor.kz/img/partner_step1.png" alt="" />
                                <span>
                                    Пройдите регистрацию в Личном кабинете
                                </span>
                            </div>

                            <div className="step">
                                <img src="https://idoctor.kz/img/partner_step2.png" alt="" />
                                <span>
                                    Загрузите подтверждающие документы
                                </span>
                            </div>

                            <div className="step">
                                <img src="https://idoctor.kz/img/partner_step3.png" alt=""/>
                                <span>
                                    Начинайте получать записи на прием - <br/> БЕСПЛАТНО
                                </span>
                            </div>


                            <div className="step">
                                <a className="btn" href="/register" rel="" >Разместить анкету</a>
                            </div>

                        </div>

                    </div>

                    <div className="home--partnership__image">
                        <img src="https://idoctor.kz/img/partnership.jpg"  alt=""/>

                    </div>
                </section>


                <section className="home--partners">
                    <h3 className="home--partners__title">Наши партнеры</h3>
                    <div className="home--partners__list">
                        <div className="home--partners__list-item">
                            <img src="https://idoctor.kz/img/partner/1.jpg" alt="vox"/>
                        </div>

                        <div className="home--partners__list-item">
                            <img src="https://idoctor.kz/img/partner/2.jpg" alt="vox"/>
                        </div>

                        <div className="home--partners__list-item">
                            <img src="https://idoctor.kz/img/partner/3.jpg" alt="vox"/>
                        </div>


                        <div className="home--partners__list-item">
                            <img src="https://idoctor.kz/img/partner/4.jpg" alt="vox"/>
                        </div>

                        <div className="home--partners__list-item">
                            <img src="https://idoctor.kz/img/partner/5.jpg" alt="vox"/>
                        </div>

                        <div className="home--partners__list-item">
                            <img src="https://idoctor.kz/img/partner/6.jpg" alt="vox"/>
                        </div>

                        <div className="home--partners__list-item">
                            <img src="https://idoctor.kz/img/partner/7.jpg" alt="vox"/>
                        </div>
                    </div>
                </section>
            </div> 
            
        );
    }
}