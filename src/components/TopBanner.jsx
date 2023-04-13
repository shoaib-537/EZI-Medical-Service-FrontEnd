import React from "react";
import "./TopBanner.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const TopBanner = () => {
  return (
    <div>
      <div className="container">
        <div className="main">
          <div className="address common">
            <div className="locationicon">
              <LocationOnOutlinedIcon sx={{ fontSize: 50 }} />
            </div>
            <div className="address">
              Patricia C. Amedee 4401 Waldeck Street <br />
              Grapevine Nashville, TX 76051
            </div>
          </div>
          <div className="contact common">
            <div className="callicon">
              <CallOutlinedIcon sx={{ fontSize: 50 }} />
            </div>
            <div className="contactnum">
              (001) 88451234 <br /> (001) 88455438
            </div>
          </div>
          <div className="button">
            <button className="btn-1">APPOINTMENT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
