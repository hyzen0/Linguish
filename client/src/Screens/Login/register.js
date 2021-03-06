import React from "react";
import "./register.css";
import {Link } from "react-router-dom";

function App() {
  return <Register {...registerData} />;
}

export default App;


function Register(props) {
  const {
    overlapGroup,
    vector,
    lingush,
    place,
    line1,
    whyLingush,
    downloadApp,
    logIn,
    line12,
    line2,
    line3,
    wellcomeToLingush,
    line22,
    mail1,
    fullName,
    email,
    vector2,
    vector3,
    line32,
    padlock1,
    password,
    line4,
    padlock12,
    confirmPassword,
    logIn2,
  } = props;

  return (
    <div className="register">
      <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
      <Header {...headerData} />
        <div className="wellcome-to-lingush poppins-semi-bold-chicago-24px">{wellcomeToLingush}</div>
        <div className="log-in-box border-1-5px-fuchsia-pink">
          <div className="overlap-group1">
            <img className="line-2-1" src={line22} />
            <div className="mail">
              <img className="mail-1" src={mail1} />
              <div className="auto-flex">
                <div><input className="full-name poppins-normal-black-15px" type="text" placeholder={fullName}/></div>
                <div><input className="email poppins-normal-black-15px" type="text" placeholder={email}/></div>
              </div>
            </div>
            <div className="user">
              <img className="vector-1" src={vector2} />
              <img className="vector-2" src={vector3} />
            </div>
          </div>
          <img className="line-3-1" src={line32} />
          <div className="password">
            <img className="padlock-1" src={padlock1} />
            <div><input className="password-1 poppins-normal-black-15px" placeholder={password} type="password"/></div>
          </div>
          <img className="line-4" src={line4} />
          <div className="password-2">
            <img className="padlock-1" src={padlock12} />
            <div><input className="confirm-password poppins-normal-black-15px" type="password" placeholder={confirmPassword} /></div>
          </div>
        </div>
        <div className="button-log-in">
          <img className="log-in-1" src={logIn2} />
        </div>
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
const registerData = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/mask-group-1@1x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/vector-3@2x.svg",
    lingush: "Lingush",
    place: "Home",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/line-1-1@2x.svg",
    whyLingush: "Why Lingush?",
    downloadApp: "Download App",
    logIn: "Log in",
    line12: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/line-1@2x.png",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/line-1@2x.png",
    line3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/line-3-1@2x.svg",
    wellcomeToLingush: "Wellcome to Lingush",
    line22: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-2-2@1x.svg",
    mail1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/mail-1@2x.svg",
    fullName: "Full Name",
    email: "Email",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/vector-1@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/vector@2x.svg",
    line32: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-2-2@1x.svg",
    padlock1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/padlock-1@2x.svg",
    password: "Password",
    line4: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-2-2@1x.svg",
    padlock12: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/padlock-1@2x.svg",
    confirmPassword: "Confirm Password",
    logIn2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/log-in@2x.svg",
};

