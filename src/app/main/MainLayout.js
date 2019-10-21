import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Home from "../../components/pages/home/Home";
import Header from '../../components/shared/header/Header';
import Footer from '../../components/shared/footer/Footer';
import Medcenter from '../../components/pages/medcenters/medcenters';
import Doctors from "../../components/pages/doctors/doctors";
import Articles from "../../components/pages/articles/articles";
import DetailPage from "../../components/pages/medcenters/MedcenterElement/DetailPage/DetailPage";

export default function MainLayout(){
    return(
        <div className="MainLayout">
            <Header/>

                <Switch>
                    <Route path="/medcenters" component={Medcenter} />
                    <Route path="/articles" component={Articles} />
                    <Route path="/doctors" component={Doctors} />
                    <Route path="/:slug" component={DetailPage} />
                    <Route path="/articles" component={Articles}/>
                    <Route path="/" component={Home} />

                </Switch>
            <Footer/>
        </div>
    );
}