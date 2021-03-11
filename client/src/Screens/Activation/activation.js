import React, { useState } from "react";
import {Link, Redirect } from "react-router-dom";
import './activation.css';
import axios from 'axios';

function activate(){

    return <Activate/>;
}

function Activate(){
    const segments = new URL(window.location).pathname.split('/');
    const key = (segments.pop() || segments.pop()) ; // Handle potential trailing slash
    const token = ({token:`${key}`});
    const [loggedin, setLoggedin] = useState(false);
const handleSubmit = () =>{
    axios.post('/api/activation', token).then(
        res=>{
            alert(res.data.message);
            setLoggedin(true);
        },
    )
    .catch(
        err=>{
            alert(err.message);
        }
    )
}

if(loggedin){
    return  <Redirect to ={'/login'}/>;
  }

    return (
        <button className="button" onClick={handleSubmit} >Register</button>
    )
}

export default activate;