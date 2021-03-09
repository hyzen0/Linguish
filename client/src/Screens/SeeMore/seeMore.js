import React from "react";
import './seeMore.css';
import Slider from "../../Components/slidder";
import {Link} from "react-router-dom";

function seeMore() {
  return <SeeMoreDetailsScreen {...SeeMoreDetailsScreenData} />;
}

export default seeMore;


function SeeMoreDetailsScreen(props) {
  const {
    thirdPage,
    vector2,
    ellipse2,
    text4,
    arIcons_Interactive1,
    quiz,
    x81364ArtParentFamilyChildDownloadF,
    text3,
    plansIcon1,
    ellipse9,
    ellipse7,
    ellipse6,
    ellipse5,
    ellipse8,
    ellipse10,
    vector1,
    group6Props,
    group62Props,
    logoProps,
    headerProps,
  } = props;

  return (
    <div className="see-more-details-screen">
      <div className="overlap-group">
        <div className="third-page" style={{ backgroundImage: `url(${thirdPage})` }}>
          <Slider/>
        </div>
        <Logo vector={logoProps.vector} text5={logoProps.text5} />
        <Header {...headerProps} />
      </div>
    </div>
  );
}


function Group6(props) {
  const { text1, arIcons_Interactive1, className } = props;

  return (
    <div className={`group-6 ${className || ""}`}>
      <p className="text- poppins-normal-white-15px">{text1}</p>
      <img className="x-icon" src={arIcons_Interactive1} />
    </div>
  );
}


function Logo(props) {
  const { vector, text5, className } = props;

  return (
    <div className={`logo ${className || ""}`}>
      <img className="vector" src={vector} />
      <h1 className="text--1 poppins-normal-white-24px">{text5}</h1>
    </div>
  );
}


function Header(props) {
  const { place, line1, text6, text7, text8, line12, line2, line3, logoProps } = props;

  return (
    <div className="header">
      <Logo vector={logoProps.vector} text5={logoProps.text5} className="logo-1" />
      <div className="overlap-group2">
        <div className="navigation">
        <Link to="/"><div className="home">
            <div className="place poppins-semi-bold-white-18px">{place}</div>
          </div></Link>
          <Link to="/lets_get_started1"><div className="text-6 poppins-semi-bold-alabaster-18px">{text6}</div></Link>
          <a href="https://play.google.com/store/apps/details?id=com.MyDos.Lingush"><div className="text-7 poppins-semi-bold-white-18px">{text7}</div></a>
          <Link to="/login"><div className="text-8 poppins-semi-bold-white-18px">{text8}</div></Link>
        </div>
      </div>
    </div>
  );
}
const group6Data = {
    text1: "Use AR to find hidden oblects",
    arIcons_Interactive1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ar-icons-interactive-1-1@2x.svg",
};

const group62Data = {
    text1: "Learn more new worlds",
    arIcons_Interactive1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/plans-icon-1-1@2x.svg",
};

const logoData = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/vector@2x.svg",
    text5: "Lingush",
};

const logo2Data = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/vector@2x.svg",
    text5: "Lingush",
};

const headerData = {
    place: "Home",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1-5@2x.svg",
    text6: "Why Lingush?",
    text7: "Download App",
    text8: "Log in",
    line12: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/line-1-2@2x.svg",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/line-2-2@2x.svg",
    line3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/line-3-2@2x.svg",
    logoProps: logo2Data,
};

const SeeMoreDetailsScreenData = {
    thirdPage: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/why-lingush@1x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/vector-2@2x.svg",
    ellipse2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ellipse-2-1@2x.svg",
    text4: "You will definitly love the game",
    arIcons_Interactive1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ar-icons-interactive-1-2@2x.svg",
    quiz: "You will have interesting quiz",
    x81364ArtParentFamilyChildDownloadF: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/81364-art-parent-family-child-download-free-image-1-1@2x.svg",
    text3: "Work hard and be the best",
    plansIcon1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/plans-icon-1-2@2x.svg",
    ellipse9: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ellipse-6@2x.svg",
    ellipse7: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ellipse-6@2x.svg",
    ellipse6: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ellipse-6@2x.svg",
    ellipse5: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ellipse-5@2x.svg",
    ellipse8: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ellipse-6@2x.svg",
    ellipse10: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ellipse-6@2x.svg",
    vector1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/vector-1-1@2x.svg",
    group6Props: group6Data,
    group62Props: group62Data,
    logoProps: logoData,
    headerProps: headerData,
};

