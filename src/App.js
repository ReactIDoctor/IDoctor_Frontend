import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.scss';

import LoginLayout from './app/login/LoginLayout';
import MainLayout from './app/main/MainLayout';
import RegistrationLayout from "./app/registration/RegistrationLayout";


export default class App extends Component {
  render (){
    return (
      <div>
        
        <Switch>
            <Route path="/auth" component = {LoginLayout}/>
            <Route path="/register"  component={RegistrationLayout}/>
            <Route path="/" component = {MainLayout}/>
        </Switch>

      </div>
    );
  }
}

