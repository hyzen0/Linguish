import React from "react";
import './letsGetStarted1.css';
import {Link } from "react-router-dom";
// import seeMore from './../SeeMore/seeMore';

function letsGetStarted1() {
  return <WhyLingush {...whyLingushData} />;
}

export default letsGetStarted1;


function WhyLingush(props) {
  const {
    whyLingush,
    vector,
    text4,
    ellipse3,
    text1,
    arIconsInteractive1,
    whyLingush2,
    ellipse2,
    x81364ArtParentFamilyChildDownloadF,
    text3,
    seeMore,
    line5,
    getItOn,
    googlePlay1,
    googlePlay,
    googlePlay12,
    appStore,
    ellipse4,
    text2,
    plansIcon1,
  } = props;

  return (
    <div className="why-lingush" style={{ backgroundImage: `url(${whyLingush})` }}>
      <div className="auto-flex">
        <div className="logo">
          <img className="vector" src={vector} />
          <div className="text-4 poppins-normal-white-24px">{text4}</div>
        </div>
        <div className="group-6">
          <div className="overlap-group-1">
            <img className="ellipse-" src={ellipse3} />
            <div className="text- poppins-normal-white-18px">{text1}</div>
            <img className="x-icon" src={arIconsInteractive1} />
          </div>
        </div>
      </div>
      <div className="auto-flex1">
        <h1 className="why-lingush poppins-semi-bold-white-30px">{whyLingush2}</h1>
        <div className="group-5">
          <div className="overlap-group2">
            <img className="ellipse-2" src={ellipse2} />
            <img className="x81364-art--ee-image-1" src={x81364ArtParentFamilyChildDownloadF} />
            <div className="text-3 poppins-normal-white-18px">{text3}</div>
          </div>
        </div>
        {/* <div className="detail"> */}
          {/* <div className="see-more poppins-normal-fair-pink-15px">{seeMore}</div> */}
          <Link to="/see_more"><div className="detail">
          <div className="see-more poppins-normal-fair-pink-15px">{seeMore}</div>
          <img className="line-5" src={line5} />
            </div>
            </Link>
        {/* </div> */}
        <div className="download-app">
          <div className="get-it-on poppins-normal-baby-powder-20px">{getItOn}</div>
          <div className="auto-flex2">
            <div className="butto-down-oad-google">
              <div className="overlap-group border-1-5px-black">
                <img className="google-play-1" src={googlePlay1} />
                <div className="google-play poppins-normal-black-18px">{googlePlay}</div>
              </div>
            </div>
            <div className="butto-down--app-store">
              <div className="overlap-group1 border-1-5px-black">
                <img className="google-play-1" src={googlePlay12} />
                <div className="app-store poppins-normal-black-18px">{appStore}</div>
              </div>
            </div>
          </div>
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
  );
}
const whyLingushData = {
    whyLingush: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/why-lingush@1x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/vector@2x.svg",
    text4: "Lingush",
    ellipse3: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ellipse-3@2x.svg",
    text1: "AR will keep your kids active indoors while learning new vocabulary items",
    arIconsInteractive1: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ar-icons-interactive-1@2x.svg",
    whyLingush2: "Why Lingush?",
    ellipse2: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ellipse-2@2x.svg",
    x81364ArtParentFamilyChildDownloadF: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/81364-art-parent-family-child-download-free-image-1@2x.svg",
    text3: "Play with your kids. You will love to play Hide & Find objects at home with your kids",
    seeMore: "See more",
    line5: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/line-5@2x.svg",
    getItOn: "Get it on",
    googlePlay1: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/google-play-1@2x.svg",
    googlePlay: "Google Play",
    googlePlay12: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/google-play-1-1@2x.svg",
    appStore: "App Store",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ellipse-3@2x.svg",
    text2: "You will get your kids’ weekly progress reports and analytics",
    plansIcon1: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/plans-icon-1@2x.svg",
};

