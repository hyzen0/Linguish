import React from "react";
import "./App.css";
import {Link } from "react-router-dom";

function App() {
  return <Main {...MainData} />;
}

export default App;


function Main(props) {
  const {
    main,
    ellipse1,
    maskGroup,
    image,
    x6486925_Preview1,
    lingush,
    description,
    letsGetStarted,
    getItOn,
    googlePlay1,
    googlePlay,
    googlePlay12,
    appStore,
    headerProps,
  } = props;

  return (
    <div className="main border-class-1" style={{ backgroundImage: `url(${main})` }}>
      <div className="overlap-group">
        <img className="ellipse-1" src={ellipse1} />
        <img className="mask-group" src={maskGroup} />
        <div className="image" style={{ backgroundImage: `url(${image})` }}>
          <img className="x6486925preview-1" src={x6486925_Preview1} />
        </div>
        <div className="offer-construction">
          <h1 className="lingush poppins-normal-white-60px">{lingush}</h1>
         
          <div className="overlap-group1">
            <div className="description poppins-normal-white-20px">{description}</div>
            <Link to="/lets_get_started1">
            <div className="button-main">
              <img className="lets-get-started" src={letsGetStarted} />
            </div></Link>
          </div>
            
        </div>
        <Header {...headerProps} />
        <div className="download-app">
          <div className="get-it-on poppins-normal-baby-powder-20px">{getItOn}</div>
          <div className="auto-flex">
            <div className="butto-download-google">
              <div className="overlap-group1-1 border-1-5px-black">
                <img className="google-play-1" src={googlePlay1} />
                <div className="google-play poppins-normal-black-18px">{googlePlay}</div>
              </div>
            </div>
            <div className="butto-download-app-store">
              <div className="overlap-group2-1 border-1-5px-black">
                <img className="google-play-1" src={googlePlay12} />
                <div className="app-store poppins-normal-black-18px">{appStore}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Header(props) {
  const { vector, text3, place, line1, text1, text2, logInI78627839, line12, line2, line3 } = props;

  return (
    <div className="header">
      <div className="logo">
        <img className="vector" src={vector} />
        <div className="text-3 poppins-normal-white-24px">{text3}</div>
      </div>
      <div className="overlap-group2">
        <div className="navigation">
          <Link to="/"><div className="home">
            <div className="place poppins-semi-bold-white-18px">{place}</div>
            <img className="line-1" src={line1} />
          </div></Link>
          <Link to="/lets_get_started1"><div className="text-1 poppins-normal-alabaster-18px">{text1}</div></Link>
          <Link to="/lets_get_started1"><div className="text-2 poppins-normal-white-18px">{text2}</div></Link>
          <Link to="/login"><div className="log-in-i78627839 poppins-normal-white-18px">{logInI78627839}</div></Link>
        </div>
        <img className="line-1-1" src={line12} />
        <img className="line-2" src={line2} />
        <img className="line-3" src={line3} />
      </div>
    </div>
  );
}
const headerData = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/vector@2x.svg",
    text3: "Lingush",
    place: "Home",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1-1@2x.svg",
    text1: "Why Lingush?",
    text2: "Download App",
    logInI78627839: "Log in",
    line12: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1@2x.png",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1@2x.png",
    line3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1@2x.png",
};

const MainData = {
    main: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/rectangle-2@1x.svg",
    ellipse1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ellipse-1@1x.svg",
    maskGroup: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/mask-group@1x.svg",
    image: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/7d1a8812a5c4e60f6ce82bd26fea81c0-1@1x.svg",
    x6486925_Preview1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/6486925-preview-1@2x.svg",
    lingush: "Lingush",
    description: "is a new way of learning through play",
    letsGetStarted: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/lets-get-started@2x.svg",
    getItOn: "Get it on",
    googlePlay1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/google-play-1@2x.svg",
    googlePlay: "Google Play",
    googlePlay12: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/google-play-1-1@2x.svg",
    appStore: "App Store",
    headerProps: headerData,
};

