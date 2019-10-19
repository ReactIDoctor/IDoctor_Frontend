import React from 'react';
import {Switch,Route} from 'react-router-dom';


import Home from '../../components/pages/home/Home';
import Header from '../../components/shared/header/Header';
import Footer from '../../components/shared/footer/Footer';
import Medcenter from "../../components/pages/medcenters/medcenters";
import Doctors from "../../components/pages/doctors/doctors";

export default function MainLayout(){
    return(
        <div className="MainLayout">
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/medcenters" component={Medcenter} />
                <Route path="/doctors" component={Doctors} />
            </Switch>
            <Footer/>
        </div>
    );
}