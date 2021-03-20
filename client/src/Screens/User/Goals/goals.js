import React from "react";
import './goals.css';
import Header from "../../../Components/header";
import { Dropdown } from 'semantic-ui-react'

function App() {
  return <Goals {...GoalsData} />;
}

export default App;


function Goals(props) {
  const {
    goals,
    logOut,
    menu1,
    analytics,
    subscriptions,
    classes,
    teachers,
    students,
    quizzes,
    goals2,
    line3,
    selectClass,
    selectStudent,
    x1A,
    vector,
    all,
    vector2,
    type,
    topic,
    level,
    egNumbers,
    egBeginner,
    setGoal,
    vector22,
    overlapGroup5,
    colors,
    overlapGroup6,
    colors2,
    overlapGroup7,
    colors3,
    overlapGroup8,
    colors4,
    vector1,
    logo3Props,
    levelTextbxProps,
    colorpalettesvgrepocom1Props,
    colorpalettesvgrepocom12Props,
    colorpalettesvgrepocom13Props,
    colorpalettesvgrepocom14Props,
  } = props;

  const items = [
    {class: '1A'},
    {class: '1B'},
    {class: '1C'},
    {class: '1D'},
    {class: '1E'},
  ]
  const stateOptions =items.map((item,i)=>({
    text: items.class   
   }))

  return (
    <div className="goals" style={{ backgroundImage: `url(${goals})` }}>
      <Header/>
      <div className="flex-col">
        {/* <div className="flex-row">
          <Logo3 vector={logo3Props.vector} lingush={logo3Props.lingush} />
          <div className="log-out poppins-bold-white-24px">{logOut}</div>
          <img className="menu-1" src={menu1} />
        </div> */}
        
        <div className="flex-row-3">
          <div className="select-class poppins-medium-black-24px">{selectClass}</div>
          <div className="select-student poppins-medium-black-24px">{selectStudent}</div>
        </div>
        <div className="flex-row-4">
        <select className="overlap-group" >
  <option value="Orange">Orange</option>
  <option value="Radish">Radish</option>
  <option value="Cherry">Cherry</option>
</select>
          <div className="class-box">
            <div className="overlap-group">
              <div className="x1-a poppins-semi-bold-white-18px">{x1A}</div>
              <img className="vector-10" src={vector} />
            </div>
          </div>
          <div className="student-box">
            <div className="overlap-group1">
              <div className="all poppins-semi-bold-white-18px">{all}</div>
              <img className="vector-11" src={vector2} />
            </div>
          </div>
        </div>
        <div className="flex-row-5">
          <div className="type poppins-medium-black-24px">{type}</div>
          <div className="topic poppins-medium-black-24px">{topic}</div>
          <div className="level poppins-medium-black-24px">{level}</div>
        </div>
      </div>
      <div className="flex-row-6">
        <LevelTextbx egColors={levelTextbxProps.egColors} />
        <div className="topic-textbox">
          <div className="overlap-group3 border-0-8px-mist-gray">
            <input className="eg-numbers poppins-extra-light-chicago-12px" placeholder={egNumbers}/>
          </div>
        </div>
        <div className="level-textbox">
          <div className="overlap-group4 border-0-8px-mist-gray">
            <input className="eg-beginner poppins-extra-light-chicago-12px" placeholder={egBeginner}/>
          </div>
        </div>
        <div className="set-goal">
          <img className="set-goal-1" src={setGoal} />
        </div>
      </div>
      <div className="flex-row-7">
        <img className="vector-2" src={vector22} />
        <div className="color-card">
          <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup5})` }}>
            <Colorpalettesvgrepocom1 {...colorpalettesvgrepocom1Props} />
            <div className="colors poppins-medium-black-24px">{colors}</div>
          </div>
        </div>
        <div className="color-card">
          <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup6})` }}>
            <Colorpalettesvgrepocom1 {...colorpalettesvgrepocom12Props} />
            <div className="colors poppins-medium-black-24px">{colors2}</div>
          </div>
        </div>
        <div className="color-card">
          <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup7})` }}>
            <Colorpalettesvgrepocom1 {...colorpalettesvgrepocom13Props} />
            <div className="colors poppins-medium-black-24px">{colors3}</div>
          </div>
        </div>
        <div className="color-card">
          <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup8})` }}>
            <Colorpalettesvgrepocom1 {...colorpalettesvgrepocom14Props} />
            <div className="colors poppins-medium-black-24px">{colors4}</div>
          </div>
        </div>
        <img className="vector-1" src={vector1} />
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


function LevelTextbx(props) {
  const { egColors } = props;

  return (
    <div className="type-textbox">
      <div className="overlap-group2 border-0-8px-mist-gray">
        <input className="eg-verb poppins-extra-light-chicago-12px"placeholder={egColors}/>
      </div>
    </div>
  );
}


function Colorpalettesvgrepocom1(props) {
  const { overlapGroup2, vector, vector2, vector3, vector4, vector5, vector6, vector7 } = props;

  return (
    <div className="color-palette-svgrepo-com-1">
      <div className="overlap-group-2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
        <div className="flex-row-1">
          <img className="vector-3" src={vector} />
          <img className="vector-4" src={vector2} />
          <div className="flex-col-1">
            <img className="vector-5" src={vector3} />
            <img className="vector-6" src={vector4} />
          </div>
        </div>
        <div className="flex-row-2">
          <img className="vector-7" src={vector5} />
          <img className="vector-8" src={vector6} />
          <img className="vector-9" src={vector7} />
        </div>
      </div>
    </div>
  );
}
const logo3Data = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/vector-5@2x.svg",
    lingush: "Lingush",
};

const levelTextbxData = {
    egColors: "Eg. Verb",
};

const colorpalettesvgrepocom1Data = {
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-5@2x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-12@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-11@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-10@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-9@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-6@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-7@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-8@2x.svg",
};

const colorpalettesvgrepocom12Data = {
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-5@2x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-12@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-11@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-10@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-9@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-6@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-7@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-8@2x.svg",
};

const colorpalettesvgrepocom13Data = {
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-5@2x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-12@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-11@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-10@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-9@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-6@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-7@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-8@2x.svg",
};

const colorpalettesvgrepocom14Data = {
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-29@2x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-36@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-35@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-34@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-33@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-30@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-31@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60521cb59f2f282eeaecb557/img/vector-32@2x.svg",
};

const GoalsData = {
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
    logo3Props: logo3Data,
    levelTextbxProps: levelTextbxData,
    colorpalettesvgrepocom1Props: colorpalettesvgrepocom1Data,
    colorpalettesvgrepocom12Props: colorpalettesvgrepocom12Data,
    colorpalettesvgrepocom13Props: colorpalettesvgrepocom13Data,
    colorpalettesvgrepocom14Props: colorpalettesvgrepocom14Data,
};

