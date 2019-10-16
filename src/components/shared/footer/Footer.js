import React from 'react';
import './Footer.scss';
import instagram from "../../../assets/images/instagram.png";
import vk from "../../../assets/images/vk.png";
import fb from "../../../assets/images/facebook.png";
import yb from "../../../assets/images/youtube.png";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer--row">
                <div className="footer--column">
                    <div className="footer--column__title">Пациенту</div>
                    <div className="footer--column__body">Врачи</div>
                    <div className="footer--column__body">Медцентры</div>
                    <div className="footer--column__body">Специалисты</div>
                    <div className="footer--column__body">Типы медцентров</div>
                </div>
                <div className="footer--column">
                    <div className="footer--column__title">Услуги</div>
                    <div className="footer--column__body">Медицинская библиотека</div>
                    <div className="footer--column__body">Online-консультация</div>
                    <div className="footer--column__body">Cправочник заболеваний</div>
                    <div className="footer--column__body">Статьи</div>
                </div>
                <div className="footer--column">
                    <div className="footer--column__title">О нас</div>
                    <div className="footer--column__body">О проекте</div>
                    <div className="footer--column__body">Сотрудничество</div>
                    <div className="footer--column__body">Контакты</div>
                    <div className="footer--column__body">Правовая информация</div>
                </div>
                <div className="footer--column">
                    <div className="footer--column__title">Мы в соц. сетях</div>
                    <div className="social--icons">
                        <a  href="https://www.instagram.com/idoctor_kz/" target="_blank" rel="noopener noreferrer">
                            <img className="social--icons__item" src={instagram} alt="Instagram" />
                        </a>
                        <a href="https://vk.com/idoctorkz1" target="_blank" rel="noopener noreferrer">
                            <img  className="social--icons__item"  src={vk} alt="Vkontacte" />
                        </a>
                        <a href="https://www.facebook.com/kz.idoctor" target="_blank" rel="noopener noreferrer">
                            <img  className="social--icons__item"  src={fb} alt="Facebook" />
                        </a>
                        <a href="https://vk.com/idoctorkz1" target="_blank" rel="noopener noreferrer">
                            <img  className="social--icons__item"  src={yb} alt="Youtube" />
                        </a>
                    </div>
                    <div className="footer--column__body">Есть ошибка? Сообщите нам</div>
                </div>
            </div>
            <div className="footer--copyright">
                <div className="footer--copyright__title">iDoctor — сервис по поиску врачей по всему
                    Казахстану. Вызов врача на дом, онлайн-консультация, бесплатная запись на прием.
                </div>
                <div className="footer--copyright__footer">
                    2019 © iDoctor.kz
                </div>
            </div>
        </div>
    );
}