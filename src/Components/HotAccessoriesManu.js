import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HotAccessoriesManu.css";

const HotAccessoriesManu = () => {
  return (
    <div className="HotAccessoriesManu">
      <Link className="HotAccessoriesLink" to="/music">
        Music Store
      </Link>
      <Link className="HotAccessoriesLink" to="/smartDevice">
        Smart Device
      </Link>
      <Link className="HotAccessoriesLink" to="/home">
        Home
      </Link>
      <Link className="HotAccessoriesLink" to="/lifestyle">
        Lifestyle
      </Link>
      <Link className="HotAccessoriesLink" to="/mobileAccessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotAccessoriesManu;
