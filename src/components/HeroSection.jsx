import React from "react";
import "./HeroSection.css";
import nurse from '../media/nurse.png'
import CircleIcon from "@mui/icons-material/Circle";
const HeroSection = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-main">
          <div className="hero-Text">
            <div className="hero-topHeading">
              <div className="hero-divider1"></div>
              <h6 className="herosub"> Medical Care</h6>
            </div>
            <div className="heroHeading">
              <h1>
                Take Care Of <br /> Your Health <br /> Now
                <CircleIcon style={{ color: "#38f9a5", fontSize: "20px" }} />
              </h1>
            </div>
            <div className="hero-subtitle">
              <span>
                A wonderful serenity has taken possession of my entire soul,
                like <br/> these sweet mornings of spring which.
              </span>
            </div>
            <div className="hero-btn">
              <button className="hero-btn1">READ MORE</button>
            </div>
          </div>
          <div className="heroImg">
            <div className="heroImage">
              <img src={nurse} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
