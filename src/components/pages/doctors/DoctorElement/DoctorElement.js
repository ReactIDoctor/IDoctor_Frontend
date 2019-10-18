import React, {Component} from 'react';
import './DoctorElement.scss'

import star from "../../../../assets/images/star-full.png";
import review from "../../../../assets/images/review-icon.png";
import map from "../../../../assets/images/map-icon.png";
import time from "../../../../assets/images/time-icon.png";



export default class DoctorElement extends Component {
    render() {
        const {doctor}=this.props;

        return (
            <div className="DoctorElement">
                <div className="profile doctor-profile">
                    <div className="profile--left">
                        <div className="logo">
                            <img className="logo-image" src={doctor.img} alt="Doctor" />
                        </div>
                        <div className="star--rating">
                            <img className="doctor-star-icon" src={star} alt="Star"/>
                            <img className="doctor-star-icon" src={star} alt="Star"/>
                            <img className="doctor-star-icon" src={star} alt="Star"/>
                            <img className="doctor-star-icon" src={star} alt="Star"/>
                            <img className="doctor-star-icon" src={star} alt="Star"/>{doctor.rating}
                        </div>
                        <div className="review--rating">
                            <img src={review} alt="Review" className="review-icon"/>
                            {doctor.review} отзывов
                        </div>
                    </div>
                    <div className="profile--right">
                        <div className="profile--basic__title">
                            <h2 >  {doctor.name}</h2>
                        </div>
                        <div className="skills--list">
                            <a className="doctor-medcenter" href="https://idoctor.kz/almaty/doctors/oftalmolog-okulist">{doctor.speacialist}</a>
                        </div>
                        <div className="hotspots">
                            <div className="hotspot--grey">
                                Врач
                            </div>
                            <div className="hotspot--white">
                                Стаж {doctor.experience}
                            </div>
                        </div>
                        <div className="profile--info__address">
                            <div className="doctor-profile--info__row">
                                <span className="profile--info__row-title">Адрес Приема:</span>
                                {doctor.address}
                            </div>
                            <div className="doctor-profile--info__row ">
                                <span className="profile--info__row-title">МЕД.ЦЕНТР:</span>
                                <a className="doctor-medcenter" href="https://idoctor.kz/almaty/medcenter/3291-optika-pri-aptekaplyus"> {doctor.medcenter}</a>
                            </div>
                        </div>
                    </div>
                    <div className="doctor--price">
                        <div className="doctor--price__title">
                            Прием от:
                        </div>
                        <div className="doctor--price__tag">
                            {doctor.price}ТГ.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}