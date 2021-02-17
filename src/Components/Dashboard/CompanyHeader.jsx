import React from "react";
import "./Admin.css";
const CompanyHeader = (props) => {
  try {
    return (
      <div className="company_details">
        <h4 className="heading">{props.heading}</h4>
        <hr />
      </div>
    );
  } catch (e) {
    return <h1>Details Not available</h1>;
  }
};

export default CompanyHeader;
