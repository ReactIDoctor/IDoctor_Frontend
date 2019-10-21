import React, {Component} from 'react';
import './doctors.scss';
import '../medcenters/medcenters.scss';
import DoctortElement from "../doctors/DoctorElement/DoctorElement"
import { connect } from "react-redux";

class Doctors extends Component {

    render() {
        
        let {doctors} = this.props;

        return (
            <div className="Doctors">
                <div className="breadcrumbs">
                    <a href="/" className="breadcrumbs-item">Главная/</a>
                    <a href="/doctors" className="breadcrumbs-item">Врачи в Алматы/</a>
                    <div className="breadcrumbs-item bold"></div>
                </div>

                <div className="main doctor-main">
                    <div className="main--left">
                        <div className="card">
                            <div className="search--filters__item">
                                <div className="search--filters__item-title">Выбрать специализацию:</div>
                                <input type="text" placeholder="Поиск..." className="search--filters__item-input"/>
                            </div>
                        </div>
                        <div className="card">
                            <div className="search--filters__item">
                                <div className="search--filters__item-title">По стоимости приема:</div>
                                <div className="search--filters__item-body">
                                    <label>Первичный прием</label>
                                    <div className="flexbox">
                                        <input className="flexbox-input" type="number" name="price.from" value='0' disabled/>
                                         -
                                        <input className="flexbox-input" type="number" name="price.to" placeholder="До"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main--right">
                        <div className="search--head doctor-search--head">
                            <div className="search--head__title">
                                <h1> Врачи-специалисты в Алматы</h1>
                                <div className="search--head__info"> {doctors.length} врачей</div>
                            </div>
                            <div className="search--head__filter doctor-filter">
                                <input placeholder="ФИО врача..." type="text" className="filter--input"/>
                            </div>
                        </div>
                        <div className="search--head__info doctor-info__title">
                            Топ лучших специалистов в Алматы. Список  с фото, отзывами, рейтингом и проверенными контактами.
                            Быстрый поиск контактов  на iDoctor.kz.
                        </div>
                        <div className="search--list">
                            {
                                doctors.map((doctor ,index)=> (
                                    <DoctortElement
                                        key={index}
                                        doctor={doctor}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    doctors: state.doctors.doctors,
  })
  
  
  export default connect(
    mapStateToProps,
  )(Doctors);