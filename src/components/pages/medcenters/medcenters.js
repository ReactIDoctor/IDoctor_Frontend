import React, {Component} from 'react';
import './medcenters.scss';

import MedcenterElement from "./MedcenterElement/MedcenterElement";
import {connect} from "react-redux";

class Medcenter extends Component{
    componentDidMount() {
        // const {medcenters} = this.props;
    }

    render() {


        let {medcenters} = this.props;

        return (
            <div className="Medcenter">
                <div className="breadcrumbs">
                    <a href="/" className="breadcrumbs-item">Главная/</a>
                    <a href="/medcenters" className="breadcrumbs-item">Медцентры в Алматы/</a>
                    <div href="" className="breadcrumbs-item bold">Клиники в Казахстане </div>
                </div>

                <div className="main">
                    <div className="search--head">
                        <div className="search--head__title">
                            <h1> Клиники в  Казахстане</h1>
                            <div className="search--head__info"> {medcenters.length} медцентров</div>
                        </div>
                        <div className="search--head__filter">
                            <img className="filter-icon" alt="Filter" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/filter-192-1133964.png"/>
                            Фильтры
                        </div>
                    </div>
                    <div className="search--list">
                        {
                            medcenters.map((medcenter ,index)=> (
                                <MedcenterElement
                                    key={index}
                                    index={index}
                                    medcenter={medcenter}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    medcenters: state.medcenters.medcenters,
})


export default connect(
    mapStateToProps,
)(Medcenter);