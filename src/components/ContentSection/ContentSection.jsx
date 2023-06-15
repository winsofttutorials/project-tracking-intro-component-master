import React from "react";
import "./ContentSection.css";
import illustration from "../images/illustration-devices.svg";
const ContentSection = () => {
  return (
    <div className="c-wrapper">
      <div className="section-cover">
        <div className="c-container">
          <div className="left-side">
            <span>New</span>
            <span>MONOGRAPH DASHBOARD</span>
            <h1>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
            <p>Project planning and time tracking for agile teams</p>
            <div className="controls">
              <button type="button">SCHEDULE A DEMO</button>
              <p>TO SEE A PREVIEW</p>
            </div>
          </div>
          <div className="right-side">
            <div className="image-container">
              <img src={illustration} alt="illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
