import React from 'react';
import {Switch,Route} from 'react-router-dom';


import Home from '../../components/pages/home/Home';

export default function MainLayout(){
    return(
        <div className="MainLayout">

            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    );
}