import React from "react";
import "./DetailSection.css";
import docnrs from "../../../media/docnrs.jpg";
const DetailSection = () => {
  return (
    <div>
      <div className="ds-container">
        <div className="ds-main">
          <div className="ds-text">
            <div className="ds-subheading">
              <h5>Welcome to phlox</h5>
            </div>
            <div className="ds-mainheading">
              <h2>Wonderful Serenity Has Taken Possession</h2>
            </div>
            <div className="ds-divider"></div>
            <div className="ds-textarea">
              <h6>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart.A wonderful serenity has taken possession of my entire
                soul, like these sweet mornings of spring which I enjoy with my
                whole heart.
              </h6>
            </div>
            <div className="ds-button">
              <button>Read More</button>
            </div>
          </div>
          <div className="ds-img">
            <img src={docnrs} alt="pt-pic" />
            <div className="ds-table">
              <div className="table-container">
                <h2>Opening Hours</h2>
                <ul className="ds-list">
                  <li className="ds-listitem">
                    <span className="span1">Monday</span>
                    <span className="span2"></span>
                    <span className="span3">08:00-21:00</span>
                  </li>
                  <li className="ds-listitem">
                    <span className="span1">Tuesday</span>
                    <span className="span2"></span>
                    <span className="span3">08:00-21:00</span>
                  </li>
                  <li className="ds-listitem">
                    <span className="span1">Wednesday</span>
                    <span className="span2"></span>
                    <span className="span3">08:00-21:00</span>
                  </li>
                  <li className="ds-listitem">
                    <span className="span1">Thursday</span>
                    <span className="span2"></span>
                    <span className="span3">08:00-21:00</span>
                  </li>
                  <li className="ds-listitem">
                    <span className="span1">Friday</span>
                    <span className="span2"></span>
                    <span className="span3">08:00-21:00</span>
                  </li>
                  <li className="ds-listitem">
                    <span className="span1">Saturday/Sunday</span>
                    <span className="span2"></span>
                    <span className="span3">08:00-21:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
