import React, {useState, useEffect} from "react";
import "./header.css";
import {Link } from "react-router-dom";
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


function header() {
  return <Header {...headerData} />
}

export default header;

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