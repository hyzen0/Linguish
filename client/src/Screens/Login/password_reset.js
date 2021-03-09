import React from "react";
import "./password_reset.css";
import {Link, useHistory } from "react-router-dom";

function App() {
  return (
    <ForgetPassword
      overlapGroup="https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/mask-group-1@1x.svg"
      resetPassword="Reset Password"
      text1="Please enter your email address to request a password reset"
      mail1="https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/mail-1@2x.svg"
      email="email"
      logIn="https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/log-in-1@2x.svg"
      headerProps={headerData}
    />
  );
}

export default App;


function ForgetPassword(props) {
  const { overlapGroup, resetPassword, text1, mail1, email, logIn, headerProps } = props;

  return (
    <div className="forget-password">
      <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <Header {...headerProps} />
        <div className="reset-password poppins-semi-bold-chicago-24px">{resetPassword}</div>
        <div className="text-1 poppins-normal-chicago-18px-2">{text1}</div>
        <div className="log-in-box border-1-5px-fuchsia-pink">
          <div className="mail">
            <img className="mail-1" src={mail1} />
            <input className="email poppins-normal-black-15px" placeholder={email}></input>
          </div>
        </div>
        <div className="button-log-in">
          <img className="log-in" src={logIn} />
        </div>
      </div>
    </div>
  );
}


function Header(props) {
  const { vector, text5, place, line1, text2, text3, text4, line12, line2, line3 } = props;

  return (
    <div className="header">
      <div className="logo">
        <img className="vector" src={vector} />
        <h1 className="text-5 poppins-normal-chicago-24px">{text5}</h1>
      </div>
      <div className="overlap-group1">
        <div className="navigation">
        <Link to="/"><div className="home">
            <div className="place poppins-normal-chicago-18px">{place}</div>
            <img className="line-1" src={line1} />
          </div></Link>
          <Link to="/lets_get_started1"><div className="text-2 poppins-normal-chicago-18px">{text2}</div></Link>
          <a href="https://play.google.com/store/apps/details?id=com.MyDos.Lingush"><div className="text-3 poppins-normal-chicago-18px">{text3}</div></a>
          <Link to="/login"><div className="text-4 poppins-semi-bold-chicago-18px">{text4}</div></Link> 
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
    text5: "Lingush",
    place: "Home",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1-9@2x.svg",
    text2: "Why Lingush?",
    text3: "Download App",
    text4: "Log in",
    line12: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1@2x.png",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1@2x.png",
    line3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-3-3@2x.svg",
};


