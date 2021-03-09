import React, {useState, useEffect} from "react";
import "./login.css";
import {Link } from "react-router-dom";
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


function login() {
  return <LogIn {...LogInData} />;
}

export default login;

function LogIn(props) {
  const {
    overlapGroup,
    logInToLingush,
    mail1,
    email,
    line2,
    padlock1,
    password,
    logIn,
    line3,
    forgotPassword,
    line4,
    headerProps,
  } = props;

  const [details, setDetails] = useState({email: '', password: ''});

  const onSubmitHandler=()=>{
    axios.post(`${process.env.REACT_APP_API_URL}/login`, details).then(
      res =>{
        console.log(res);
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  };
  return (
    <div className="log-in">
      <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <Header {...headerProps} />
        <div className="log-in-to-lingush poppins-semi-bold-chicago-24px">{logInToLingush}</div>
         {/* Email */}
          <div className="log-in-box"><div className="mail">
            <img className="mail-1" src={mail1} />
            <div className="email poppins-normal-black-15px"></div>
          </div>
          <input className="log-in-box-email border-1-5px-fuchsia-pink" type="text" placeholder={email} onChange={(e) => setDetails({ ...details, email: e.target.value })}/></div>
        {/* Password */}
        <div className="log-in-box"><div className="mail">
            <img className="padlock-1" src={padlock1} />
            <div className="email poppins-normal-black-15px"></div>
          </div>
          <input className="log-in-box-password border-1-5px-fuchsia-pink" type="password" placeholder={password} onChange={(e) => setDetails({ ...details, password: e.target.value })} /></div>
          <button className="button-log-in" onClick={onSubmitHandler}>
          <img className="log-in" src={logIn} />
        </button>
        <Link to="/reset_password"><div className="line-or">
          <img className="line-3-1" src={line3} />
          <div className="forgot-password poppins-normal-black-20px">{forgotPassword}</div>
          <img className="line-4" src={line4} />
        </div></Link>
        <Link to="/register"><div className="line-or">
          <img className="line-3-1" src={line3} />
          <div className="forgot-password poppins-normal-black-20px">Dont Have an Account?</div>
          <img className="line-4" src={line4} />
        </div></Link>
      </div>
    </div>
  );
}


function Header(props) {
  const { vector, text4, place, line1, text1, text2, text3, line12, line2, line3 } = props;

  return (
    <div className="header">
      <div className="logo">
        <img className="vector" src={vector} />
        <h1 className="text-4 poppins-normal-chicago-24px">{text4}</h1>
      </div>
      <div className="overlap-group1">
        <div className="navigation">
        <Link to="/"><div className="home">
            <div className="place poppins-normal-chicago-18px">{place}</div>
            <img className="line-1" src={line1} />
          </div></Link>
          <Link to="/lets_get_started1"><div className="text-1 poppins-normal-chicago-18px">{text1}</div></Link>
          <a href="https://play.google.com/store/apps/details?id=com.MyDos.Lingush"><div className="text-2 poppins-normal-chicago-18px">{text2}</div></a>
          <Link to="/login"><div className="text-3 poppins-semi-bold-chicago-18px">{text3}</div></Link>
        </div>
        <img className="line-1-1" src={line12} />
        <img className="line-2" src={line2} />
        <img className="line-3" src={line3} />
      </div>
    </div>
  );
}
const headerData = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/vector-3@2x.svg",
    text4: "Lingush",
    place: "Home",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1-5@2x.svg",
    text1: "Why Lingush?",
    text2: "Download App",
    text3: "Log in",
    line12: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1@2x.png",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1@2x.png",
    line3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-3-3@2x.svg",
};

const LogInData = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/mask-group-1@1x.svg",
    logInToLingush: "Log in to Lingush",
    mail1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/mail-1@2x.svg",
    email: "email",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-2-2@1x.svg",
    padlock1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/padlock-1@2x.svg",
    password: "password",
    logIn: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/log-in@2x.svg",
    line3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-3-2@2x.svg",
    forgotPassword: "Forgot  password?",
    line4: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-3-2@2x.svg",
    headerProps: headerData,
};

