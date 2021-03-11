import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import letsGetStarted1 from './Screens/LetsGetStarted/letsGetStarted1';
import seeMore from './Screens/SeeMore/seeMore';
import login from './Screens/Login/login';
import register from './Screens/Login/register';
import password_reset from './Screens/Login/password_reset';
import activate from './Screens/Activation/activation';
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


axios.defaults.baseURL=process.env.REACT_APP_API_URL
ReactDOM.render(
  <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Lets_get_started1" component={letsGetStarted1} />
        <Route path="/see_more" component={seeMore}/>
        <Route path="/login" component={login}/>
        <Route path="/register" component={register}/>
        <Route path="/reset_password" component={password_reset}/>
        <Route path="/users/activate/" component={activate}/>
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
