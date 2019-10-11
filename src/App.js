import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import LoginLayout from './app/login/LoginLayout';
import Home from './components/pages/Home/Home';
import Header from './components/shared/header/Header';

export default class App extends Component {
  render (){
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/auth" component = {LoginLayout}/>
          <Route path="/home" component = {Home}/>
        </Switch>
      </div>
    );
  }
}

