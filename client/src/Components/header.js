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
    const {logOut,menu1,analytics,subscriptions,classes,teachers,students,quizzes,goals2,line3,logo3Props, } = props;
  
    return (
      <div className="col">
        <div className="row">
          <Logo3 vector={logo3Props.vector} lingush={logo3Props.lingush} />
          <div className="logout poppins-bold-white-24px">{logOut}</div>
          {/* <img className="menu-1" src={menu1} /> */}
        </div>
        <div className="navbar">
          <div className="analytics poppins-normal-white-24px">{analytics}</div>
          <div className="subscriptions poppins-normal-white-24px">{subscriptions}</div>
          <div className="classes poppins-normal-white-24px">{classes}</div>
          <div className="teachers poppins-normal-white-24px">{teachers}</div>
          <div className="students poppins-normal-white-24px">{students}</div>
          <div className="quizzes poppins-normal-white-24px">{quizzes}</div>
            <div className="goals poppins-semi-bold-white-24px">{goals2}</div>
            <img className="line" src={line3} />
          </div>
      </div>
    );
  }
  function Logo3(props) {
    const { vector, lingush } = props;
  
    return (
      <div className="logo">
        <img className="vector" src={vector} />
        <h1 className="title poppins-normal-white-24px">{lingush}</h1>
      </div>
    );
  }
  const logo3Data = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/vector-5@2x.svg",
    lingush: "Lingush",
};
  const headerData = {
    goals: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/school-analytics@1x.svg",
    logOut: "Log out",
    menu1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/menu-1@2x.svg",
    analytics: "Analytics",
    subscriptions: "Subscriptions",
    classes: "Classes",
    teachers: "Teachers",
    students: "Students",
    quizzes: "Quizzes",
    goals2: "Goals",
    line3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/line-3@2x.svg",
    selectClass: "Select Class",
    selectStudent: "Select Student",
    x1A: "1-A",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-3@2x.svg",
    all: "All",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-3@2x.svg",
    type: "Type",
    topic: "Topic",
    level: "Level",
    egNumbers: "Eg. Numbers",
    egBeginner: "Eg. Beginner",
    setGoal: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/set-goal@2x.svg",
    vector22: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/vector-2@2x.svg",
    overlapGroup5: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/rectangle-14@2x.svg",
    colors: "Colors",
    overlapGroup6: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/rectangle-14@2x.svg",
    colors2: "Colors",
    overlapGroup7: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/rectangle-14@2x.svg",
    colors3: "Colors",
    overlapGroup8: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/rectangle-14@2x.svg",
    colors4: "Colors",
    vector1: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/vector-1-1@2x.svg",
    logo3Props: logo3Data,};
    


