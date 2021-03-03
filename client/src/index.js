import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import letsGetStarted1 from './Screens/LetsGetStarted/letsGetStarted1';
import seeMore from './Screens/SeeMore/seeMore';
import login from './Screens/Login/login';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
  <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Lets_get_started1" component={letsGetStarted1} />
        <Route path="/see_more" component={seeMore}/>
        <Route path="/login" component={login}/>
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
