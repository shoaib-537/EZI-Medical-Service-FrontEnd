import React from "react";
import "./ServicesCards.css";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealingIcon from "@mui/icons-material/Healing";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import AccessibleIcon from "@mui/icons-material/Accessible";

const ServicesCards = () => {
  return (
    <div>
      <div className="sc-container">
        <div className="sc-main">
          <div className="sc-card card1">
            <h2>Our Departments</h2>
          </div>
          <div className="sc-card sc-depts ">
            <div className="sc-icon">
              <HealingIcon
                sx={{
                  fontSize: "112px",
                  color: "#38f9a5",
                  pb: "30px",
                  bgcolor: "transparent",
                }}
              />
            </div>
            <div className="sc-heading">
              <h3>Eye Treatment</h3>
            </div>
          </div>

          <div className="sc-card sc-depts">
            <div className="icon">
              <MedicalServicesIcon
                sx={{
                  fontSize: "112px",
                  color: "#38f9a5",
                  pb: "30px",
                  bgcolor: "transparent",
                }}
              />
            </div>
            <div className="sc-heading">
              <h3>Nuclear Magnetic</h3>
            </div>
          </div>
          <div className="sc-card sc-depts">
            <div className="icon">
              <MonitorHeartIcon
                sx={{ fontSize: "112px", color: "#38f9a5", pb: "30px" }}
              />
            </div>
            <div className="sc-heading">
              <h3>Traumatology</h3>
            </div>
          </div>
          <div className="sc-card sc-depts">
            <div className="icon">
              <AccessibleIcon
                sx={{ fontSize: "112px", color: "#38f9a5", pb: "30px" }}
              />
            </div>
            <div className="sc-heading">
              <h3>Infantile Paralysis </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
