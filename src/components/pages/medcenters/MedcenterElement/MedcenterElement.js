import React, {Component} from 'react';
import './MedcenterElement.scss';

import {withRouter} from 'react-router-dom';

import map from "../../../../assets/images/map-icon.png";
import time from "../../../../assets/images/time-icon.png";
import star from "../../../../assets/images/star-3-512.png";
import review from "../../../../assets/images/review-icon.png";

export default class MedcenterElement extends Component{

    constructor(props){
        super(props);
        this.state = {
            medcenter: {}
        }
    }
    openDetailPage = () => {
        // this.props.history.replace("/auth")
        console.log(this.props.medcenter);
    }

    componentDidMount() {
        // console.log(this.props);
        this.setState({medcenter: this.props.medcenter });
        console.log(this.state.medcenter);
    }
    componentDidUpdate(prevProps){
        // to avoid infinite loop, set state in condition
        if( this.props.medcenter !== prevProps.medcenter ){
            this.setState({medcenter: this.props.medcenter})
        }
    }


    render() {
        const {medcenter}=this.props;
        // console.log(medcenter);
        return(

            <div className="MedcenterElement">
                <div className="profile">
                    <div className="profile--left">
                        <div className="logo">
                            <img className="logo-image" src={medcenter.img} alt="GasrtoClinic" />
                        </div>
                        <div className="star--rating">
                            <img className="star-icon" src={star} alt="Star"/>
                            <img className="star-icon" src={star} alt="Star"/>
                            <img className="star-icon" src={star} alt="Star"/>
                            <img className="star-icon" src={star} alt="Star"/>
                            <img className="star-icon" src={star} alt="Star"/>0.00
                        </div>
                        <div className="review--rating">
                            <img src={review} alt="Review" className="review-icon"/>
                            {medcenter.star} отзывов
                        </div>
                    </div>
                    <div className="profile--right">
                        <div className="profile--basic__title">
                            <h2 >  {medcenter.name}</h2>
                        </div>
                        <div className="skills--list">
                            {medcenter.skills.map((el, i)=> (el +'/'))}
                        </div>
                        <div className="profile--info__address">
                            <div className="profile--info__row">
                                <img src={map} alt="Location" className="img-map"/>
                                {medcenter.location}
                            </div>
                            <div className="profile--info__row">
                                <img src={time} alt="Location" className="img-map"/>
                                {medcenter.time}
                            </div>
                            <div className="profile--info__row profile--review">
                                <span className="profile--review__title">Отзыв:</span>
                            {medcenter.review}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile--additional">
                    <div className="profile--additional__block">
                        <div onClick={this.openDetailPage}className="profile--additional_ __price">
                            <div  className="profile--additional__title price__title" >
                                Подробнее
                            </div>
                        </div>
                        <div className="profile--additional_ __row">
                            <a className="profile--additional__title row__title" href="https://idoctor.kz/almaty/medcenter/509-meditsinskiy-tsentr-gastroclinic">
                                Показать номер
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

