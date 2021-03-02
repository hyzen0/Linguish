import React from "react";
import "./App.css";
import {Link } from "react-router-dom";

function App() {
  return <Main {...mainData} />;
}

export default App;


function Main(props) {
  const {
    main,
    ellipse1,
    maskGroup,
    image,
    x6486925Preview1,
    lingush,
    description,
    letsGetStarted,
    getItOn,
    googlePlay1,
    googlePlay,
    googlePlay12,
    appStore,
    vector,
    text1,
  } = props;

  return (
    <div className="main border-class-1" style={{ backgroundImage: `url(${main})` }}>
      <div className="overlap-group">
        <img className="ellipse-1" src={ellipse1} />
        <img className="mask-group" src={maskGroup} />
        <div className="image" style={{ backgroundImage: `url(${image})` }}>
          <img className="x6486925preview-1" src={x6486925Preview1} />
        </div>
        <div className="offer-construction">
          <h1 className="lingush poppins-normal-white-60px">{lingush}</h1>
          <div className="overlap-group1">
            <div className="description poppins-normal-white-20px">{description}</div>
            <Link to="/lets_get_started1"><button className="button-main">
            <img className="lets-get-started" src={letsGetStarted} />
            </button>
            </Link>
          </div>
        </div>
        <div className="download-app">
          <div className="get-it-on poppins-normal-baby-powder-20px">{getItOn}</div>
          <div className="auto-flex">
            <div className="butto-down-oad-google">
              <div className="overlap-group1-1 border-1-5px-black">
                <img className="google-play-1" src={googlePlay1} />
                <div className="google-play poppins-normal-black-18px">{googlePlay}</div>
              </div>
            </div>
            <div className="butto-down--app-store">
              <div className="overlap-group2 border-1-5px-black">
                <img className="google-play-1" src={googlePlay12} />
                <div className="app-store poppins-normal-black-18px">{appStore}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="logo">
        <img className="vector" src={vector} />
        <div className="text-1 poppins-normal-white-24px">{text1}</div>
      </div>
    </div>
  );
}
const mainData = {
    main: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/rectangle-2@1x.svg",
    ellipse1: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ellipse-1@1x.svg",
    maskGroup: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/mask-group@1x.svg",
    image: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/7d1a8812a5c4e60f6ce82bd26fea81c0-1@1x.svg",
    x6486925Preview1: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/6486925-preview-1@2x.svg",
    lingush: "Lingush",
    description: "is a new way of learning through play",
    letsGetStarted: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/lets-get-started@2x.svg",
    getItOn: "Get it on",
    googlePlay1: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/google-play-1@2x.svg",
    googlePlay: "Google Play",
    googlePlay12: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/google-play-1-1@2x.svg",
    appStore: "App Store",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/vector@2x.svg",
    text1: "Lingush",
};
