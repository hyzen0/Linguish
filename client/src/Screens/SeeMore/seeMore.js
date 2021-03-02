import React from "react";
import './seeMore.css';

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
    vector,
    text5,
    group6Props,
    group62Props,
  } = props;

  return (
    <div className="see-more-details-screen">
      <div className="overlap-group">
        <div className="third-page" style={{ backgroundImage: `url(${thirdPage})` }}>
          <img className="vector-2" src={vector2} />
          <div className="auto-flex">
            <div className="overlap-group1">
              <img className="ellipse-2" src={ellipse2} />
              <div className="frame-1">
                <div className="group-8">
                  <p className="text-4 poppins-normal-white-15px">{text4}</p>
                  <img className="ar-iconsinteractive-1" src={arIcons_Interactive1} />
                </div>
                <Group6 text1={group6Props.text1} arIcons_Interactive1={group6Props.arIcons_Interactive1} />
                <div className="group-1">
                  <div className="quiz poppins-normal-white-20px">{quiz}</div>
                  <img className="x81364-art-paren-ad-free-image-1" src={x81364ArtParentFamilyChildDownloadF} />
                </div>
                <Group6
                  text1={group62Props.text1}
                  arIcons_Interactive1={group62Props.arIcons_Interactive1}
                  className="group-7"
                />
                <div className="group-9">
                  <p className="text- poppins-normal-white-15px">{text3}</p>
                  <img className="plans-icon-1" src={plansIcon1} />
                </div>
              </div>
            </div>
            <div className="group-8-1">
              <img className="ellipse-9" src={ellipse9} />
              <img className="ellipse-" src={ellipse7} />
              <img className="ellipse-" src={ellipse6} />
              <img className="ellipse-" src={ellipse5} />
              <img className="ellipse-" src={ellipse8} />
              <img className="ellipse-" src={ellipse10} />
            </div>
          </div>
          <img className="vector-1" src={vector1} />
        </div>
        <div className="logo">
          <img className="vector" src={vector} />
          <h1 className="text-5 poppins-normal-white-24px">{text5}</h1>
        </div>
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
const group6Data = {
    text1: "Use AR to find hidden oblects",
    arIcons_Interactive1: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ar-icons-interactive-1-1@2x.svg",
};

const group62Data = {
    text1: "Learn more new worlds",
    arIcons_Interactive1: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/plans-icon-1-1@2x.svg",
};

const SeeMoreDetailsScreenData = {
    thirdPage: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/why-lingush@1x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/vector-2@2x.svg",
    ellipse2: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ellipse-2-1@2x.svg",
    text4: "You will definitly love the game",
    arIcons_Interactive1: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ar-icons-interactive-1-2@2x.svg",
    quiz: "You will have interesting quiz",
    x81364ArtParentFamilyChildDownloadF: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/81364-art-parent-family-child-download-free-image-1-1@2x.svg",
    text3: "Work hard and be the best",
    plansIcon1: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/plans-icon-1-2@2x.svg",
    ellipse9: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ellipse-6@2x.svg",
    ellipse7: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ellipse-6@2x.svg",
    ellipse6: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ellipse-6@2x.svg",
    ellipse5: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ellipse-5@2x.svg",
    ellipse8: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ellipse-6@2x.svg",
    ellipse10: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/ellipse-6@2x.svg",
    vector1: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/vector-1-1@2x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60340a36837042df94200ed1/releases/60340deef0ed780bbdebd2f7/img/vector@2x.svg",
    text5: "Lingush",
    group6Props: group6Data,
    group62Props: group62Data,
};

