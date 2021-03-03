import React from "react";
import './letsGetStarted1.css';
import {Link } from "react-router-dom";
// import seeMore from './../SeeMore/seeMore';

function letsGetStarted1() {
  return <WhyLingush {...WhyLingushData} />;
}

export default letsGetStarted1;

function WhyLingush(props) {
  const {
    whyLingush,
    whyLingush2,
    ellipse3,
    text1,
    arIcons_Interactive1,
    ellipse2,
    x81364ArtParentFamilyChildDownloadF,
    text3,
    ellipse4,
    text2,
    plansIcon1,
    seeMore,
    line5,
    getItOn,
    googlePlay1,
    googlePlay,
    googlePlay12,
    appStore,
    headerProps,
  } = props;

  return (
    <div className="why-lingush" style={{ backgroundImage: `url(${whyLingush})` }}>
      <Header {...headerProps} />
      <h1 className="why-lingush poppins-semi-bold-white-30px">{whyLingush2}</h1>
      <div className="auto-flex">
        <div className="group-6">
          <div className="overlap-group-1">
            <img className="ellipse-" src={ellipse3} />
            <div className="text- poppins-normal-white-18px">{text1}</div>
            <img className="x-icon" src={arIcons_Interactive1} />
          </div>
        </div>
        <div className="group-5">
          <div className="overlap-group2">
            <img className="ellipse-2" src={ellipse2} />
            <img className="x81364-art-paren-ad-free-image-1" src={x81364ArtParentFamilyChildDownloadF} />
            <div className="text-3 poppins-normal-white-18px">{text3}</div>
          </div>
        </div>
        <div className="group-7">
          <div className="overlap-group-1">
            <img className="ellipse-" src={ellipse4} />
            <div className="text- poppins-normal-white-20px">{text2}</div>
            <img className="x-icon" src={plansIcon1} />
          </div>
        </div>
      </div>
      <div className="detail">
      <Link to="/see_more"><div className="see-more poppins-normal-fair-pink-15px">{seeMore}</div></Link>
          <img className="line-5" src={line5} />
            </div>
      <div className="download-app">
        <div className="get-it-on poppins-normal-baby-powder-20px">{getItOn}</div>
        <div className="auto-flex1">
          <div className="butto-download-google">
            <div className="overlap-group border-1-5px-black">
              <img className="google-play-1" src={googlePlay1} />
              <div className="google-play poppins-normal-black-18px">{googlePlay}</div>
            </div>
          </div>
          <div className="butto-download-app-store">
            <div className="overlap-group1 border-1-5px-black">
              <img className="google-play-1" src={googlePlay12} />
              <div className="app-store poppins-normal-black-18px">{appStore}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Header(props) {
  const { vector, text6, place, line1, text4, text5, logInI78737839, line12, line2, line3 } = props;

  return (
    <div className="header">
      <div className="logo">
        <img className="vector" src={vector} />
        <div className="text-6 poppins-normal-white-24px">{text6}</div>
      </div>
      <div className="overlap-group3">
        <div className="navigation">
        <Link to="/"> <div className="home">
            <div className="place poppins-normal-white-18px">{place}</div>
            <img className="line-1" src={line1} />
          </div>
          </Link>
          <Link to="/lets_get_started1"><div className="text-4 poppins-semi-bold-alabaster-18px">{text4}</div></Link>
          <div className="text-5 poppins-normal-white-18px">{text5}</div>
          <Link to="/login"><div className="log-in-i78737839 poppins-normal-white-18px">{logInI78737839}</div></Link>
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
    text6: "Lingush",
    place: "Home",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1@2x.png",
    text4: "Why Lingush?",
    text5: "Download App",
    logInI78737839: "Log in",
    line12: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1-2@2x.svg",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1@2x.png",
    line3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1@2x.png",
};

const WhyLingushData = {
    whyLingush: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/why-lingush@1x.svg",
    whyLingush2: "Why Lingush?",
    ellipse3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ellipse-3@2x.svg",
    text1: "AR will keep your kids active indoors while learning new vocabulary items",
    arIcons_Interactive1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ar-icons-interactive-1@2x.svg",
    ellipse2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ellipse-2@2x.svg",
    x81364ArtParentFamilyChildDownloadF: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/81364-art-parent-family-child-download-free-image-1@2x.svg",
    text3: "Play with your kids. You will love to play Hide & Find objects at home with your kids",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ellipse-3@2x.svg",
    text2: "You will get your kids’ weekly progress reports and analytics",
    plansIcon1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/plans-icon-1@2x.svg",
    seeMore: "See more",
    line5: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-5@2x.svg",
    getItOn: "Get it on",
    googlePlay1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/google-play-1@2x.svg",
    googlePlay: "Google Play",
    googlePlay12: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/google-play-1-1@2x.svg",
    appStore: "App Store",
    headerProps: headerData,
};

